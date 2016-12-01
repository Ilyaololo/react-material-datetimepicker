/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Day } from '../Day';

export default class Week extends Component {
    static propTypes = {
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        week: PropTypes.number.isRequired,
        handleChangeDay: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {day, month, year, week, handleChangeDay} = this.props;

        let currentWeek = moment().set({'week': week, 'year': year}),
            days = [];

        for (let i = 1; i <= 7; ++i) { // цикл по дням недели
            days.push(
                <Day
                    key={"Day_" + i}
                    day={currentWeek.isoWeekday(i).format("DD")}
                    selectedDay={day === currentWeek.isoWeekday(i).format("DD")}
                    active={currentWeek.isoWeekday(i).format('MMMM') === month}
                    handleChangeDay={handleChangeDay}
                />
            );
        }

        return (
            <tr className="c-datepicker__days-row">
                {days}
            </tr>
        );
    }
}