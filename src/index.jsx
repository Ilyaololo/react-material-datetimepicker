/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

/* eslint react/no-unused-prop-types: "off" */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Calendar, Clock, Head} from 'components';
import {Constants, Options, State} from 'models';
import {OptionsType} from 'types';
import {Utils} from 'utils';

import 'themes/index.less';

const constObj = new Constants();

export default class DateTimePicker extends PureComponent {

    static type = constObj.type;

    static tab = constObj.tab;

    static propTypes = {
        date: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.instanceOf(moment),
            PropTypes.string,
        ]),
        options: PropTypes.shape(OptionsType),
        show: PropTypes.bool,
        activeTab: PropTypes.oneOf([ // активная вкладка пикера (календарь/часы)
            constObj.tab.CALENDAR,
            constObj.tab.CLOCK,
        ]),
        calendarTab: PropTypes.oneOf([ // активная вкладка у календаря (года/месяца/недели)
            constObj.calendar.MONTH,
            constObj.calendar.WEEK,
            constObj.calendar.YEAR,
        ]),
        type: PropTypes.oneOf([ // тип Пикера (все, только часы, только календарь)
            constObj.type.ALL,
            constObj.type.ONLY_CALENDAR,
            constObj.type.ONLY_CLOCK,
        ]),
    };

    static defaultProps = {
        activeTab: constObj.tab.CALENDAR,
        calendarTab: constObj.calendar.YEAR,
        date: new Date(),
        options: new Options(),
        show: true,
        type: constObj.type.ALL,
    };

    constructor(props) {
        super(props);
        this.state = new State();
    }

    componentWillMount() {
        this._props2state(new State(this.props));
    }

    componentWillReceiveProps(nextProps) {
        this._props2state(new State(nextProps));
    }

    /**
     * Обработчик клика по иконке "Закрыть"
     */
    onClose = () => {
        this._changeState({
            name: 'show',
            value: false,
        });
    };

    /**
     * Обработчик смены активной вкладки пикера (календарь/часы)
     * @param {string} tab
     */
    onChangeActiveTab = (tab) => {
        this._changeState({
            isBlock: true,
            name: 'activeTab',
            value: tab,
        });

        this.onChangeCalendarActiveTab(constObj.calendar.YEAR);
    };

    /**
     * Обработчик смены активной вкладки у календаря (календарь/часы)
     * @param {string} tab
     */
    onChangeCalendarActiveTab = (tab) => {
        this._changeState({
            isBlock: true,
            name: 'calendarTab',
            value: tab,
        });
    };

    /**
     * Обновление состояния при получении props
     * @param {object} props
     * @private
     */
    _props2state = (props) => {
        this.setState(props);
    };

    /**
     * Универсальный обработчик изменения параметров
     * @param {boolean} isBlock
     * @param {string} name
     * @param {*} value
     * @private
     */
    _changeState = ({isBlock = false, name, value}) => {
        if (isBlock) {
            if (this.state[name] !== value) {
                this.setState({
                    [name]: value
                });
            }
        } else {
            this.setState({
                [name]: value
            });
        }
    };

    render() {
        const {options, type} = this.props;
        const {activeTab, calendarTab, date, show} = this.state;

        let result = null;

        if (show) {
            switch (type) {
                case constObj.type.ALL: {
                    if (activeTab === constObj.tab.CALENDAR) {
                        result = (
                            <Calendar
                                calendarTab={calendarTab}
                                date={date}
                                options={options}
                            />
                        );
                    } else if (activeTab === constObj.tab.CLOCK) {
                        result = (
                            <Clock
                                date={date}
                                options={options}
                            />
                        );
                    }

                    break;
                }

                case constObj.type.ONLY_CALENDAR: {
                    if (activeTab === constObj.tab.CALENDAR) {
                        result = (
                            <Calendar
                                calendarTab={calendarTab}
                                date={date}
                                options={options}
                            />
                        );
                    } else {
                        Utils.warn('Incompatible props: Type is ONLY_CALENDAR, but activeTab is not CALENDAR.');
                    }

                    break;
                }

                case constObj.type.ONLY_CLOCK: {
                    if (activeTab === constObj.tab.CLOCK) {
                        result = (
                            <Clock
                                date={date}
                                options={options}
                            />
                        );
                    } else {
                        Utils.warn('Incompatible props: Type is ONLY_CLOCK, but activeTab is not CLOCK.');
                    }

                    break;
                }

                default: {
                    result = null;
                    Utils.warn(`Incompatible props: Unknowns Type is ${type}`);

                    break;
                }
            }

            return (
                <div className="date-time-picker">
                    <Head
                        activeTab={activeTab}
                        calendarTab={calendarTab}
                        date={date}
                        onChangeActiveTab={this.onChangeActiveTab}
                        onChangeCalendarActiveTab={this.onChangeCalendarActiveTab}
                        onClose={this.onClose}
                        options={options}
                        type={type}
                    />

                    {result}
                </div>
            );
        }

        return null;
    }
}