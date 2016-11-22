"use strict";

import React, {Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';

/**
 * Для удобной работы со временем
 */
import moment from 'moment';
import 'moment/locale/ru';

import {DataTimePicker} from './src';

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
            type: true, // активная вкладка: false - часы, true - календарь
            hours: moment().format("HH"), // часы
            minutes: moment().format("mm"), // минуты
            day: moment().format("DD"), // день
            month: moment().format("MMMM"), // месяц
            year: moment().format("YYYY"), // год
            weekday: moment().format("dddd") // день недели
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
        const {type, hours, minutes, day, month, year, weekday} = this.state;

        return (
            <DataTimePicker
                type={type}
                hours={hours}
                minutes={minutes}
                day={day}
                month={month}
                year={year}
                weekday={weekday}
                handleChangeType={this.handleChangeType}
                handleChangeMonth={this.handleChangeMonth}
                handleChangeDay={this.handleChangeDay}
                handleChangeHours={this.handleChangeHours}
                handleChangeMinutes={this.handleChangeMinutes}
                clickOnCancel={this.clickOnCancel}
                clickOnOK={this.clickOnOK}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
