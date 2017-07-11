/**
 * Created by i.lovenkov on 14.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Constants, DateTime, Options} from 'models';

import {CalendarTab} from './Calendar.tab';
import {ClockTab} from './Clock.tab';

const constObj = new Constants();

const Panel = (props) => {
    const {activeTab, calendarTab, date, options, type} = props;

    moment.locale(options.lang);

    let result = null;

    switch (activeTab) {
        case constObj.tab.CALENDAR: {
            result = (
                <CalendarTab
                    activeTab={activeTab}
                    calendarTab={calendarTab}
                    date={date}
                    onChangeActiveTab={props.onChangeActiveTab}
                    onChangeCalendarActiveTab={props.onChangeCalendarActiveTab}
                    options={options}
                    type={type}
                />
            );

            break;
        }

        case constObj.tab.CLOCK: {
            result = (
                <ClockTab
                    activeTab={activeTab}
                    date={date}
                    onChangeActiveTab={props.onChangeActiveTab}
                    options={options}
                    type={type}
                />
            );

            break;
        }

        default: {
            result = null;
            break;
        }
    }

    return (
        <div className="head-panel">
            {result}
        </div>
    );
};

Panel.propTypes = {
    activeTab: PropTypes.string.isRequired,
    calendarTab: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    onChangeActiveTab: PropTypes.func.isRequired,
    onChangeCalendarActiveTab: PropTypes.func.isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
    type: PropTypes.string.isRequired,
};

Panel.defaultProps = {
    activeTab: constObj.tab.CALENDAR,
    calendarTab: constObj.calendar.YEAR,
    date: new DateTime(),
    onChangeActiveTab: PropTypes.func.isRequired,
    onChangeCalendarActiveTab: PropTypes.func.isRequired,
    options: new Options(),
    type: constObj.type.ALL,
};

export {Panel};