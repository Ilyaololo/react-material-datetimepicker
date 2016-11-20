/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React from 'react';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="c-datepicker__calendar" data-rome-id="0">
                <div className="c-datepicker__calendar" id="inline-block">
                    <div className="c-datepicker__date">
                        <div className="c-datepicker__month">
                            <button className="c-datepicker__back" type="button"/>
                            <button className="c-datepicker__next" type="button"/>
                            <div className="rd-month-label">November 2016</div>
                            <table className="c-datepicker__days">
                                <thead className="c-datepicker__days-head">
                                <tr className="c-datepicker__days-row">
                                    <th className="c-datepicker__day-head">Su</th>
                                    <th className="c-datepicker__day-head">Mo</th>
                                    <th className="c-datepicker__day-head">Tu</th>
                                    <th className="c-datepicker__day-head">We</th>
                                    <th className="c-datepicker__day-head">Th</th>
                                    <th className="c-datepicker__day-head">Fr</th>
                                    <th className="c-datepicker__day-head">Sa</th>
                                </tr>
                                </thead>
                                <tbody className="c-datepicker__days-body" data-rome-offset="0">
                                <tr className="c-datepicker__days-row">
                                    <td className="c-datepicker__day-body rd-day-prev-month">30</td>
                                    <td className="c-datepicker__day-body rd-day-prev-month">31</td>
                                    <td className="c-datepicker__day-body">01</td>
                                    <td className="c-datepicker__day-body">02</td>
                                    <td className="c-datepicker__day-body">03</td>
                                    <td className="c-datepicker__day-body">04</td>
                                    <td className="c-datepicker__day-body">05</td>
                                </tr>
                                <tr className="c-datepicker__days-row">
                                    <td className="c-datepicker__day-body">06</td>
                                    <td className="c-datepicker__day-body">07</td>
                                    <td className="c-datepicker__day-body">08</td>
                                    <td className="c-datepicker__day-body">09</td>
                                    <td className="c-datepicker__day-body">10</td>
                                    <td className="c-datepicker__day-body">11</td>
                                    <td className="c-datepicker__day-body">12</td>
                                </tr>
                                <tr className="c-datepicker__days-row">
                                    <td className="c-datepicker__day-body">13</td>
                                    <td className="c-datepicker__day-body">14</td>
                                    <td className="c-datepicker__day-body">15</td>
                                    <td className="c-datepicker__day-body">16</td>
                                    <td className="c-datepicker__day-body">17</td>
                                    <td className="c-datepicker__day-body">18</td>
                                    <td className="c-datepicker__day-body">19</td>
                                </tr>
                                <tr className="c-datepicker__days-row">
                                    <td className="c-datepicker__day-body c-datepicker__day--selected">20</td>
                                    <td className="c-datepicker__day-body">21</td>
                                    <td className="c-datepicker__day-body">22</td>
                                    <td className="c-datepicker__day-body">23</td>
                                    <td className="c-datepicker__day-body">24</td>
                                    <td className="c-datepicker__day-body">25</td>
                                    <td className="c-datepicker__day-body">26</td>
                                </tr>
                                <tr className="c-datepicker__days-row">
                                    <td className="c-datepicker__day-body">27</td>
                                    <td className="c-datepicker__day-body">28</td>
                                    <td className="c-datepicker__day-body">29</td>
                                    <td className="c-datepicker__day-body">30</td>
                                    <td className="c-datepicker__day-body rd-day-next-month">01</td>
                                    <td className="c-datepicker__day-body rd-day-next-month">02</td>
                                    <td className="c-datepicker__day-body rd-day-next-month">03</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Calendar.propTypes = {};