'use strict';

import React from 'react';

export default class DataTimePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="c-scrim c-scrim--shown"></div>
                <div className="c-datepicker c-datepicker--open">
                    <input className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time"
                           type="radio"
                           name="date-toggle" value="time"/>
                    <input className="c-datepicker__toggle c-datepicker__toggle--left  c-datepicker--show-calendar"
                           type="radio" name="date-toggle" value="calendar" checked=""/>
                    <div className="c-datepicker__header">
                        <div className="c-datepicker__header-day">
                            <span className="js-day">Monday</span>
                        </div>
                        <div className="c-datepicker__header-date">
                            <span className="c-datepicker__header-date__month js-date-month">Jan 2015</span>
                            <span className="c-datepicker__header-date__day js-date-day">10th</span>
                            <span className="c-datepicker__header-date__time js-date-time">
                                    <span className="c-datepicker__header-date__hours js-date-hours">12</span>:<span
                                className="c-datepicker__header-date__minutes js-date-minutes">00</span>
                                  </span>
                        </div>
                    </div>
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
                    <div className="c-datepicker__clock">
                        <div className="c-datepicker__clock__am-pm-toggle">
                            <label className="">
                                <input
                                    className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am"
                                    type="radio" name="time-date-toggle" value="AM"/>
                                AM
                            </label>

                            <label className="c-datepicker__toggle--checked">
                                <input
                                    className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm"
                                    type="radio" name="time-date-toggle" value="PM" checked="checked"/>
                                PM
                            </label>
                        </div>

                        <div className="c-datepicker__clock__hours">
                            <div className="c-datepicker__clock__num" data-number="3">3</div>
                            <div className="c-datepicker__clock__num" data-number="4">4</div>
                            <div className="c-datepicker__clock__num" data-number="5">5</div>
                            <div className="c-datepicker__clock__num" data-number="6">6</div>
                            <div className="c-datepicker__clock__num" data-number="7">7</div>
                            <div className="c-datepicker__clock__num" data-number="8">8</div>
                            <div className="c-datepicker__clock__num" data-number="9">9</div>
                            <div className="c-datepicker__clock__num" data-number="10">10</div>
                            <div className="c-datepicker__clock__num" data-number="11">11</div>
                            <div className="c-datepicker__clock__num .c-datepicker__clock__num--active" data-number="0">
                                12
                            </div>
                            <div className="c-datepicker__clock__num" data-number="1">1</div>
                            <div className="c-datepicker__clock__num" data-number="2">2</div>
                            <div className="c-datepicker__clock-hands">
                                <div className="c-datepicker__hour-hand"></div>
                            </div>
                        </div>
                        <div className="c-datepicker__clock__minutes">
                            <div className="c-datepicker__clock__num" data-number="15">15</div>
                            <div className="c-datepicker__clock__num" data-number="20">20</div>
                            <div className="c-datepicker__clock__num" data-number="25">25</div>
                            <div className="c-datepicker__clock__num" data-number="30">30</div>
                            <div className="c-datepicker__clock__num" data-number="35">35</div>
                            <div className="c-datepicker__clock__num" data-number="40">40</div>
                            <div className="c-datepicker__clock__num" data-number="45">45</div>
                            <div className="c-datepicker__clock__num" data-number="50">50</div>
                            <div className="c-datepicker__clock__num" data-number="55">55</div>
                            <div className="c-datepicker__clock__num" data-number="0">0</div>
                            <div className="c-datepicker__clock__num" data-number="5">5</div>
                            <div className="c-datepicker__clock__num" data-number="10">10</div>
                            <div className="c-datepicker__clock-hands">
                                <div className="c-datepicker__hour-hand"></div>
                            </div>
                        </div>
                    </div>
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