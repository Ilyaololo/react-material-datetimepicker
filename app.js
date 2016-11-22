/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, {Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/ru';

import {DataTimePicker} from './src';

class App extends Component {
    constructor(props) {
        super(props);

        moment.locale('ru');

        this.state = {
            type: true, // false - часы, true - календарь
            hours: moment().format("HH"),
            minutes: moment().format("mm"),
            day: moment().format("DD"),
            month: moment().format("MMMM"),
            year: moment().format("YYYY"),
            weekday: moment().format("dddd")
        }
    }

    /**
     * Обработчик изменения календаря/часов
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

        if (month === "декабрь" && newMonth === "январь") {
            const newYear = String(parseInt(year, 10) + 1);

            this.setState({
                month: newMonth,
                year: newYear
            });
        } else if (month === "январь" && newMonth === "декабрь") {
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
     * Обработчик нажатия на Cancel
     */
    clickOnCancel = () => {
        // code...
    };

    /**
     * Обработчик нажатия на OK
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
