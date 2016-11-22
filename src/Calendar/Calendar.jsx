/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import {Week} from './Week';

export default class Calendar extends Component {
    static propTypes = {
        month: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {month, year} = this.props;

        let result = [],
            numberWeek = moment().set({'date': 1, 'month': month, 'year': year}).isoWeek();

        if (month === "январь") {
            for (let i = 0; i < 6; ++i) { // отображаем 6 недель календаря
                result.push(
                    <Week
                        key={"Week_" + i}
                        week={i}
                        month={month}
                        year={year}
                    />
                );
            }
        } else {
            for (let i = numberWeek; i < numberWeek + 6; ++i) { // отображаем 6 недель календаря
                result.push(
                    <Week
                        key={"Week_" + i}
                        week={i}
                        month={month}
                        year={year}
                    />
                );
            }
        }

        return (
            <div className="c-datepicker__calendar">
                <div className="c-datepicker__calendar" id="inline-block">
                    <div className="c-datepicker__date">
                        <div className="c-datepicker__month">
                            <button className="c-datepicker__back" type="button"/>
                            <button className="c-datepicker__next" type="button"/>
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