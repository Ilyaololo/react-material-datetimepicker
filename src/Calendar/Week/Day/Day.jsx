/**
 * Created by i.lovenkov on 22.11.16.
 */

"use strict";

import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Day extends Component {
    static propTypes = {
        day:             PropTypes.string.isRequired,
        selectedDay:     PropTypes.bool.isRequired,
        active:          PropTypes.bool.isRequired,
        handleChangeDay: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    handleClickOnDay = (e) => {
        const { handleChangeDay } = this.props;
        handleChangeDay(e.target.innerText);
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { day, active, selectedDay } = this.props;

        return (
            <td
                className={active ? (selectedDay ? "c-datepicker__day-body c-datepicker__day--selected" : "c-datepicker__day-body") : "c-datepicker__day-body rd-day-prev-month"}
                onClick={this.handleClickOnDay}
            >
                {day}
            </td>
        );
    }
}