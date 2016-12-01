"use strict";

import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

/**
 * Для удобной работы со временем
 */
import moment from 'moment';
import 'moment/locale/ru';

import { DataTimePicker } from './src';

class App extends Component {
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
        // code...
    };

    /**
     * Обработчик нажатия на кнопку OK
     */
    clickOnOK = () => {
        // code...
    };

    render() {
        const {type, hours, minutes, day, month, show, year, weekday} = this.state;

        return (
            <DataTimePicker
                clickOnCancel={this.clickOnCancel}
                clickOnOK={this.clickOnOK}
                day={day}
                handleChangeDay={this.handleChangeDay}
                handleChangeHours={this.handleChangeHours}
                handleChangeMinutes={this.handleChangeMinutes}
                handleChangeMonth={this.handleChangeMonth}
                handleChangeType={this.handleChangeType}
                hours={hours}
                minutes={minutes}
                month={month}
                show={show}
                type={type}
                weekday={weekday}
                year={year}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
