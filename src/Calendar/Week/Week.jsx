/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import {Day} from '../Day';

export default class Week extends Component {
    static propTypes = {
        month: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        week: PropTypes.number.isRequired,
    };

    render() {
        const {month, year, week} = this.props;

        let currentWeek = moment().set({'week': week + 1, 'year': year, 'weekday': 0}),
            days = [];

        // console.log(week);

        for (let i = 1; i <= 7; ++i) { // цикл по дням недели
            days.push(
                <Day
                    key={"Day_" + i}
                    day={currentWeek.isoWeekday(i).format("DD")}
                    active={currentWeek.isoWeekday(i).format('MMMM') === month}
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