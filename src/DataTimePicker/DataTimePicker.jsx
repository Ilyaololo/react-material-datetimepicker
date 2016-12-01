/**
 * Created by i.lovenkov on 20.11.16.
 */

'use strict';

import React, { Component, PropTypes } from 'react';

import { Calendar, Clock } from '../';

export default class DataTimePicker extends Component {
    static propTypes = {
        clickOnCancel: React.PropTypes.func.isRequired,
        clickOnOK: React.PropTypes.func.isRequired,
        day: React.PropTypes.string.isRequired,
        handleChangeDay: React.PropTypes.func.isRequired,
        handleChangeHours: React.PropTypes.func.isRequired,
        handleChangeMinutes: React.PropTypes.func.isRequired,
        handleChangeMonth: React.PropTypes.func.isRequired,
        handleChangeType: React.PropTypes.func.isRequired,
        hours: React.PropTypes.string.isRequired,
        minutes: React.PropTypes.string.isRequired,
        month: React.PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        type: React.PropTypes.bool.isRequired,
        weekday: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {clickOnCancel, clickOnOK, day, handleChangeDay, handleChangeHours, handleChangeMinutes, handleChangeMonth, handleChangeType, hours, minutes, month, show, type, weekday, year} = this.props;

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
                <div>
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
            <div id="date-time-picker">
                {picker}
            </div>
        );
    }
}