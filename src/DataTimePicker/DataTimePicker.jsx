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
        clickOnCancel: React.PropTypes.func,
        clickOnOK: React.PropTypes.func,
        day: React.PropTypes.string,
        handleChangeDay: React.PropTypes.func,
        handleChangeHours: React.PropTypes.func,
        handleChangeMinutes: React.PropTypes.func,
        handleChangeMonth: React.PropTypes.func,
        handleChangeType: React.PropTypes.func,
        hours: React.PropTypes.string,
        minutes: React.PropTypes.string,
        month: React.PropTypes.string,
        show: PropTypes.bool,
        type: React.PropTypes.bool,
        weekday: React.PropTypes.string,
        year: React.PropTypes.string,
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
     * Проверка наличия свойства в this.props и this.state
     * @param prop
     * @returns {*}
     * @private
     */
    _checkProperties = (prop) => {
        let result;

        if (this.props.hasOwnProperty(prop)) {
            result = this.props[prop];
        } else if (this.state.hasOwnProperty(prop)) {
            result = this.state[prop];
        }

        return result;
    };

    render() {
        const {_checkProperties} = this;

        const clickOnCancel = _checkProperties('clickOnCancel'),
            clickOnOK = _checkProperties('clickOnOK'),
            day = _checkProperties('day'),
            handleChangeDay = _checkProperties('handleChangeDay'),
            handleChangeHours = _checkProperties('handleChangeHours'),
            handleChangeMinutes = _checkProperties('handleChangeMinutes'),
            handleChangeMonth = _checkProperties('handleChangeMonth'),
            handleChangeType = _checkProperties('handleChangeType'),
            hours = _checkProperties('hours'),
            minutes = _checkProperties('minutes'),
            month = _checkProperties('month'),
            show = _checkProperties('show'),
            type = _checkProperties('type'),
            weekday = _checkProperties('weekday'),
            year = _checkProperties('year');

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
                    <div className="c-scrim c-scrim--shown"></div>
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