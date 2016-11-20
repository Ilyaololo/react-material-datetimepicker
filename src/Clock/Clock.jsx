/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                            type="radio" name="time-date-toggle" value="PM" defaultChecked="checked"/>
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
        );
    }
}

Clock.propTypes = {};