/**
 * Created by i.lovenkov on 20.11.16.
 */

'use strict';

import React, { Component, PropTypes } from 'react';

import moment from 'moment';
import 'moment/locale/ru';

import { Calendar, Clock } from '../';

export default class DataTimePicker extends Component {
    static propTypes = {
        clickOnCancel: React.PropTypes.func.isRequired,
        clickOnOK: React.PropTypes.func.isRequired,
        day: React.PropTypes.string.isRequired,
        handleChangeDay: React.PropTypes.func,
        handleChangeHours: React.PropTypes.func,
        handleChangeMinutes: React.PropTypes.func,
        handleChangeMonth: React.PropTypes.func,
        handleChangeType: React.PropTypes.func,
        hours: React.PropTypes.string.isRequired,
        minutes: React.PropTypes.string.isRequired,
        month: React.PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        weekday: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        /**
         * Подключаем локаль
         */
        moment.locale('ru');

        /**
         * Состояние, где будут хранится параметры компонента
         * По-умолчанию, дата и время берутся из системного времени
         */
        this.state = {
            day: moment().format("DD"), // день
            hours: moment().format("HH"), // часы
            minutes: moment().format("mm"), // минуты
            month: moment().format("MMMM"), // месяц
            show: true,
            type: true, // активная вкладка: false - часы, true - календарь
            weekday: moment().format("dddd"), // день недели
            year: moment().format("YYYY"), // год
        }
    }

    /**
     * Обработчик изменения активной вкладки (календарь/часы)
     * @param type
     */
    handleChangeType = (type) => {
        this.setState({
            type: type
        });
    };

    /**
     * Обработчик изменения месяца
     * @param newMonth
     */
    handleChangeMonth = (newMonth) => {
        const {month, year} = this.state;

        if (month === "декабрь" && newMonth === "январь") { // для переключения на следующий год
            const newYear = String(parseInt(year, 10) + 1);

            this.setState({
                month: newMonth,
                year: newYear
            });
        } else if (month === "январь" && newMonth === "декабрь") { // для переключения на предыдущий год
            const newYear = String(parseInt(year, 10) - 1);

            this.setState({
                month: newMonth,
                year: newYear
            });
        } else {
            this.setState({
                month: newMonth
            });
        }
    };

    /**
     * Обработчик изменения дня
     * @param day
     */
    handleChangeDay = (day) => {
        this.setState({
            day: day
        });
    };

    /**
     * Обработчик изменения часов
     * @param hours
     */
    handleChangeHours = (hours) => {
        this.setState({
            hours: moment(String(hours), "HH").format("HH")
        });
    };

    /**
     * Обработчик изменения минут
     * @param minutes
     */
    handleChangeMinutes = (minutes) => {
        this.setState({
            minutes: moment(String(minutes), "mm").format("mm")
        });
    };

    /**
     * Обработчик нажатия на кнопку Cancel
     */
    clickOnCancel = () => {
        const {show} = this.state;
        this.setState({
            show: !show,
        })
    };

    /**
     * Обработчик нажатия на кнопку OK
     */
    clickOnOK = () => {
        const {show} = this.state;
        this.setState({
            show: !show,
        })
    };

    /**
     * Проверка обработчиков
     * @param prop
     * @returns {*}
     * @private
     */
    _checkFunc = (prop) => {
        let result;

        if (this.props.hasOwnProperty(prop)) {
            result = this.props[prop];
        } else {
            result = this[prop];
        }

        return result;
    };

    /**
     * Проверка наличия свойств
     * @param prop
     * @private
     */
    _checkProp = (prop) => {
        let result;

        if (this.props.hasOwnProperty(prop)) {
            result = this.props[prop];
        } else {
            result = this.state[prop];
        }

        return result;
    };

    render() {
        const {_checkFunc, _checkProp} = this,
            clickOnCancel = _checkFunc('clickOnCancel'),
            clickOnOK = _checkFunc('clickOnOK'),
            handleChangeDay = _checkFunc('handleChangeDay'),
            handleChangeHours = _checkFunc('handleChangeHours'),
            handleChangeMinutes = _checkFunc('handleChangeMinutes'),
            handleChangeMonth = _checkFunc('handleChangeMonth'),
            handleChangeType = _checkFunc('handleChangeType'),
            day = _checkProp('day'),
            hours = _checkProp('hours'),
            minutes = _checkProp('minutes'),
            month = _checkProp('month'),
            show = _checkProp('show'),
            type = _checkProp('type'),
            weekday = _checkProp('weekday'),
            year = _checkProp('year');

        let body = type ? (
            <Calendar
                day={day}
                handleChangeDay={handleChangeDay}
                handleChangeMonth={handleChangeMonth}
                month={month}
                year={year}
            />
        ) : (
            <Clock
                handleChangeHours={handleChangeHours}
                handleChangeMinutes={handleChangeMinutes}
                hours={hours}
                minutes={minutes}
            />
        );

        let picker;

        if (show) {
            picker = (
                <div id="date-time-picker">
                    <div className="c-scrim c-scrim--shown" onClick={clickOnCancel}></div>
                    <div className="c-datepicker c-datepicker--open">
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time"
                            type="radio"
                            name="date-toggle"
                            value="time"
                            defaultChecked={ !type }
                            onClick={() => {
                                handleChangeType(false)
                            }}
                        />
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--left  c-datepicker--show-calendar"
                            type="radio"
                            name="date-toggle"
                            value="calendar"
                            defaultChecked={ type }
                            onClick={() => {
                                handleChangeType(true)
                            }}
                        />
                        <div className="c-datepicker__header">
                            <div className="c-datepicker__header-day">
                                <span className="js-day">{weekday}</span>
                            </div>
                            <div className="c-datepicker__header-date">
                                <span className="c-datepicker__header-date__month js-date-month">{month} {year}</span>
                                <span className="c-datepicker__header-date__day js-date-day">{day}</span>
                                <span className="c-datepicker__header-date__time js-date-time">
                                    <span
                                        className="c-datepicker__header-date__hours js-date-hours">{hours}</span>:
                                    <span
                                        className="c-datepicker__header-date__minutes js-date-minutes">{minutes}</span>
                                </span>
                            </div>
                        </div>

                        {body}

                        <div className="modal-btns">
                            <a className="c-btn c-btn--flat js-cancel" onClick={clickOnCancel}>Назад</a>
                            <a className="c-btn c-btn--flat js-ok" onClick={clickOnOK}>OK</a>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {picker}
            </div>
        );
    }
}