/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';

import Day from './Day';

export default class Week extends Component {
    static propTypes = {
        day:             PropTypes.string.isRequired,
        month:           PropTypes.string.isRequired,
        year:            PropTypes.string.isRequired,
        week:            PropTypes.number.isRequired,
        handleChangeDay: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { day, month, year, week, handleChangeDay } = this.props;

        let correctWeek, correctYear;

        const weekInYear = moment(`${year}`, 'YYYY').isoWeeksInYear();

        if (week > weekInYear) {
            correctWeek = '01';
            correctYear = String(parseInt(year, 10) + 1);
        } else {
            correctWeek = week;
            correctYear = year;
        }

        let currentWeek = moment(`${correctYear}-${correctWeek}`, 'YYYY-WW'),
            days = [];

        for (let i = 1; i <= 7; ++i) { // цикл по дням недели
            days.push(
                <Day
                    active={ currentWeek.isoWeekday(i).format('MMMM') === month }
                    day={ currentWeek.isoWeekday(i).format("DD") }
                    handleChangeDay={ handleChangeDay }
                    key={ `Day_${i}` }
                    selectedDay={ day === currentWeek.isoWeekday(i).format("DD") }
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