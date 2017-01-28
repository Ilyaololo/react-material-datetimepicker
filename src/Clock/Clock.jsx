/**
 * Created by i.lovenkov on 20.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Clock extends Component {
    static propTypes = {
        hours:               PropTypes.string.isRequired,
        minutes:             PropTypes.string.isRequired,
        handleChangeHours:   PropTypes.func.isRequired,
        handleChangeMinutes: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            type: true, // true - am, false - pm
        };
    }

    calcHours = (hours) => {
        const { type } = this.state;
        return String(hours + !type * 12);
    };

    calcMinutes = () => {
        const { minutes } = this.props;

        return (parseInt(minutes, 10) - (parseInt(minutes, 10) % 5));
    };

    handleOnClickMinutes = (e) => {
        const { handleChangeMinutes } = this.props;
        handleChangeMinutes(e.target.innerText);
    };

    handleOnClickHours = (e) => {
        const { handleChangeHours } = this.props;
        handleChangeHours(e.target.innerText);
    };

    componentDidMount() {
        const { hours } = this.props;
        if (parseInt(hours, 10) >= 12) {
            this.setState({
                type: false
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { type } = this.state,
            { hours, minutes } = this.props;

        return (
            <div className="c-datepicker__clock">
                <div className="c-datepicker__clock__am-pm-toggle">
                    <label className={type ? "c-datepicker__toggle--checked" : ""}>
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am"
                            type="radio"
                            name="time-date-toggle"
                            value="AM"
                            defaultChecked={ type } onClick={() => this.setState({ type: true })}
                        />
                        AM
                    </label>

                    <label className={!type ? "c-datepicker__toggle--checked" : ""}>
                        <input
                            className="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm"
                            type="radio"
                            name="time-date-toggle"
                            value="PM"
                            defaultChecked={ !type }
                            onClick={ () => this.setState({ type: false }) }
                        />
                        PM
                    </label>
                </div>

                <div className="c-datepicker__clock__hours">
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(3) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(3)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(4) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(4)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(5) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(5)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(6) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(6)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(7) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(7)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(8) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(8)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(9) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(9)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(10) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}>

                        {this.calcHours(10)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(11) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}>

                        {this.calcHours(11)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(0) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(0)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(1) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(1)}
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${ hours === this.calcHours(2) ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={this.handleOnClickHours}
                    >
                        {this.calcHours(2)}
                    </div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>

                <div className="c-datepicker__clock__minutes">
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 15 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        15
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 20 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        20
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 25 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        25
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 30 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        30
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 35 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        35
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 40 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        40
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 45 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        45
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 50 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        50
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 55 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        55
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 0 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        00
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 5 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        05
                    </div>
                    <div
                        className={ `c-datepicker__clock__num ${this.calcMinutes() === 10 ? 'c-datepicker__clock__num--active' : ''}` }
                        onClick={ this.handleOnClickMinutes }
                    >
                        10
                    </div>
                    <div className="c-datepicker__clock-hands">
                        <div className="c-datepicker__hour-hand"></div>
                    </div>
                </div>
            </div>
        );
    }
}