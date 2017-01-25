/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';

import Week from './Week';

export default class Calendar extends Component {
    static propTypes = {
        day:               PropTypes.string.isRequired,
        handleChangeDay:   PropTypes.func.isRequired,
        handleChangeMonth: PropTypes.func.isRequired,
        month:             PropTypes.string.isRequired,
        year:              PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
    }

    handleClickOnNextMonth = () => {
        const { handleChangeMonth, month } = this.props,
            newMonthID = parseInt(moment().set({ 'month': month }).month(), 10) + 1;

        handleChangeMonth(moment().month(newMonthID).format('MMMM'));
    };

    handleClickOnPrevMonth = () => {
        const { handleChangeMonth, month } = this.props,
            newMonthID = parseInt(moment().set({ 'month': month }).month(), 10) - 1;

        handleChangeMonth(moment().month(newMonthID).format('MMMM'));
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { day, month, year, handleChangeDay } = this.props;

        let result = [],
            lastYear = String(parseInt(year, 10) - 1),
            correctWeek,
            correctYear,
            numberWeek = moment().set({
                'date':  1,
                'month': month,
                'year':  year
            }).isoWeek();

        const weekInYear = moment(`${lastYear}`, 'YYYY').isoWeeksInYear();

        if (month === "январь") {
            for (let i = 0; i < 6; ++i) { // отображаем 6 недель алендаря
                if (i === 0) {
                    correctWeek = weekInYear;
                    correctYear = lastYear;
                } else {
                    correctWeek = i;
                    correctYear = year;
                }
                result.push(
                    <Week
                        day={ day }
                        handleChangeDay={ handleChangeDay }
                        key={ `Week_${correctWeek}` }
                        month={ month }
                        week={ correctWeek }
                        year={ correctYear }
                    />
                );
            }
        } else {
            for (let i = numberWeek; i < numberWeek + 6; ++i) { // отображаем 6 недель календаря
                result.push(
                    <Week
                        day={ day }
                        handleChangeDay={ handleChangeDay }
                        key={ `Week_${i}` }
                        month={month}
                        week={ i }
                        year={ year }
                    />
                );
            }
        }

        return (
            <div className="c-datepicker__calendar">
                <div className="c-datepicker__calendar" id="inline-block">
                    <div className="c-datepicker__date">
                        <div className="c-datepicker__month">
                            <button className="c-datepicker__back" type="button" onClick={this.handleClickOnPrevMonth} />
                            <button className="c-datepicker__next" type="button" onClick={this.handleClickOnNextMonth} />
                            <div className="rd-month-label">{month} {year}</div>
                            <table className="c-datepicker__days">
                                <thead className="c-datepicker__days-head">
                                <tr className="c-datepicker__days-row">
                                    <th className="c-datepicker__day-head">Пн</th>
                                    <th className="c-datepicker__day-head">Вт</th>
                                    <th className="c-datepicker__day-head">Ср</th>
                                    <th className="c-datepicker__day-head">Чт</th>
                                    <th className="c-datepicker__day-head">Пт</th>
                                    <th className="c-datepicker__day-head">Сб</th>
                                    <th className="c-datepicker__day-head">Вс</th>
                                </tr>
                                </thead>
                                <tbody className="c-datepicker__days-body">
                                {result}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}