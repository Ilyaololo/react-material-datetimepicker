/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';

export default class Clock extends Component {
    static propTypes = {
        hours: React.PropTypes.string.isRequired,
        minutes: React.PropTypes.string.isRequired,
        handleChangeHours: React.PropTypes.func.isRequired,
        handleChangeMinutes: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            type: true, // true - am, false - pm
        };
    }

    handleOnClickMinutes = (e) => {
        const {handleChangeMinutes} = this.props;
        handleChangeMinutes(e.target.innerText);
    };

    handleOnClickHours = (e) => {
        const {handleChangeHours} = this.props;
        handleChangeHours(e.target.innerText);
    };

    componentDidMount() {
        const {hours} = this.props;
        if (parseInt(hours, 10) >= 12) {
            this.setState({
                type: false
            });
        }
    }

    render() {
        const {type} = this.state,
            {hours, minutes} = this.props;

        let calcHours = (hours) => {
            let newHours = String(hours + !type * 12);

            return newHours;
        };

        return (
            <div className="c-datepicker__clock">
                <div className="c-datepicker__clock__am-pm-toggle">
                    <label className={type ? "c-datepicker__toggle--checked" : ""}>
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am"
                            type="radio" name="time-date-toggle" value="AM" defaultChecked={ type } onClick={() => {
                            this.setState({type: true})
                        }}/>
                        AM
                    </label>

                    <label className={!type ? "c-datepicker__toggle--checked" : ""}>
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm"
                            type="radio" name="time-date-toggle" value="PM" defaultChecked={ !type } onClick={() => {
                            this.setState({type: false})
                        }}/>
                        PM
                    </label>
                </div>

                <div className="c-datepicker__clock__hours">
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(3)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(4)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(5)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(6)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(7)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(8)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(9)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(10)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(11)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(0)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(1)}</div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickHours}>{calcHours(2)}</div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>

                <div className="c-datepicker__clock__minutes">
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>15
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>20
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>25
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>30
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>35
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>40
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>45
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>50
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>55
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>00
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>05
                    </div>
                    <div className="c-datepicker__clock__num" onClick={this.handleOnClickMinutes}>10
                    </div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>
            </div>
        );
    }
}