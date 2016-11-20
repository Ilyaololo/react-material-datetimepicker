/**
 * Created by i.lovenkov on 20.11.16.
 */


'use strict';

import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import {Calendar, Clock} from '../';

export default class DataTimePicker extends React.Component {
    constructor(props) {
        super(props);

        moment.locale('ru');

        this.state = {
            type: 0, // 0 - календарь, 1 - часы
            hours: moment().format("HH"),
            minutes: moment().format("mm"),
            day: moment().format("DD"),
            month: moment().format("MMMM"),
            year: moment().format("YYYY"),
            weekday: moment().format("dddd")
        }
    }

    render() {
        const {type, hours, minutes, day, month, year, weekday} = this.state;

        let body = type === 0 ? (<Calendar />) : (<Clock />);

        return (
            <div>
                <div className="c-scrim c-scrim--shown"></div>
                <div className="c-datepicker c-datepicker--open">
                    <input
                        className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time"
                        type="radio"
                        name="date-toggle"
                        value="time"
                        checked={ type === 1 }
                        onChange={() => {
                            this.setState({type: 1})
                        }}
                    />
                    <input
                        className="c-datepicker__toggle c-datepicker__toggle--left  c-datepicker--show-calendar"
                        type="radio"
                        name="date-toggle"
                        value="calendar"
                        checked={ type === 0 }
                        onChange={() => {
                            this.setState({type: 0})
                        }}
                    />
                    <div className="c-datepicker__header">
                        <div className="c-datepicker__header-day">
                            <span className="js-day">{weekday}</span>
                        </div>
                        <div className="c-datepicker__header-date">
                            <span
                                className="c-datepicker__header-date__month js-date-month">{month + " " + year}</span>
                            <span className="c-datepicker__header-date__day js-date-day">{day}</span>
                            <span className="c-datepicker__header-date__time js-date-time">
                                <span className="c-datepicker__header-date__hours js-date-hours">{hours}</span>:
                                <span
                                    className="c-datepicker__header-date__minutes js-date-minutes">{minutes}</span>
                            </span>
                        </div>
                    </div>

                    {body}

                    <div className="modal-btns">
                        <a className="c-btn c-btn--flat js-cancel">Cancel</a>
                        <a className="c-btn c-btn--flat js-ok">OK</a>
                    </div>
                </div>
            </div>
        );
    }
}

DataTimePicker.PropTypes = {};