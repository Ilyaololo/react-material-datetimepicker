/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React from 'react';

export default class Clock extends React.Component {
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

    render() {
        const {type} = this.state,
            {hours, minutes} = this.props;

        let clockFace;

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
                    <div className="c-datepicker__clock__num" data-number={3 + !type * 12} onClick={this.handleOnClickHours}>{3 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={4 + !type * 12} onClick={this.handleOnClickHours}>{4 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={5 + !type * 12} onClick={this.handleOnClickHours}>{5 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={6 + !type * 12} onClick={this.handleOnClickHours}>{6 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={7 + !type * 12} onClick={this.handleOnClickHours}>{7 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={8 + !type * 12} onClick={this.handleOnClickHours}>{8 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={9 + !type * 12} onClick={this.handleOnClickHours}>{9 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={10 + !type * 12} onClick={this.handleOnClickHours}>{10 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={11 + !type * 12} onClick={this.handleOnClickHours}>{11 + !type * 12}</div>
                    <div className="c-datepicker__clock__num .c-datepicker__clock__num--active" data-number={type ? "0" : "24"} onClick={this.handleOnClickHours}>{type ? "0" : "24"}</div>
                    <div className="c-datepicker__clock__num" data-number={1 + !type * 12} onClick={this.handleOnClickHours}>{1 + !type * 12}</div>
                    <div className="c-datepicker__clock__num" data-number={2 + !type * 12} onClick={this.handleOnClickHours}>{2 + !type * 12}</div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>

                <div className="c-datepicker__clock__minutes">
                    <div className="c-datepicker__clock__num" data-number="15" onClick={this.handleOnClickMinutes}>15
                    </div>
                    <div className="c-datepicker__clock__num" data-number="20" onClick={this.handleOnClickMinutes}>20
                    </div>
                    <div className="c-datepicker__clock__num" data-number="25" onClick={this.handleOnClickMinutes}>25
                    </div>
                    <div className="c-datepicker__clock__num" data-number="30" onClick={this.handleOnClickMinutes}>30
                    </div>
                    <div className="c-datepicker__clock__num" data-number="35" onClick={this.handleOnClickMinutes}>35
                    </div>
                    <div className="c-datepicker__clock__num" data-number="40" onClick={this.handleOnClickMinutes}>40
                    </div>
                    <div className="c-datepicker__clock__num" data-number="45" onClick={this.handleOnClickMinutes}>45
                    </div>
                    <div className="c-datepicker__clock__num" data-number="50" onClick={this.handleOnClickMinutes}>50
                    </div>
                    <div className="c-datepicker__clock__num" data-number="55" onClick={this.handleOnClickMinutes}>55
                    </div>
                    <div className="c-datepicker__clock__num" data-number="0" onClick={this.handleOnClickMinutes}>0
                    </div>
                    <div className="c-datepicker__clock__num" data-number="5" onClick={this.handleOnClickMinutes}>5
                    </div>
                    <div className="c-datepicker__clock__num" data-number="10" onClick={this.handleOnClickMinutes}>10
                    </div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>
            </div>
        );
    }
}

Clock.propTypes = {
    hours: React.PropTypes.string.isRequired,
    minutes: React.PropTypes.string.isRequired,
    handleChangeHours: React.PropTypes.func.isRequired,
    handleChangeMinutes: React.PropTypes.func.isRequired,
};