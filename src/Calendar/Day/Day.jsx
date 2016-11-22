/**
 * Created by i.lovenkov on 22.11.16.
 */

"use strict";

import React, {Component, PropTypes} from 'react';

export default class Day extends Component {
    static propTypes = {
        day: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {day, active} = this.props;

        return (
            <td className={active ? "c-datepicker__day-body" : "c-datepicker__day-body rd-day-prev-month"}>{day}</td>
        );
    }
}