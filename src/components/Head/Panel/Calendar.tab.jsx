/**
 * Created by i.lovenkov on 15.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Switcher} from 'components/Head';
import {Constants, DateTime, Options} from 'models';
import {Utils} from 'utils';

const constObj = new Constants();

const CalendarTab = (props) => {
    const {activeTab, calendarTab, date, options, type} = props;

    return (
        <div className="calendar-tab">
            <div
                role="tab"
                tabIndex={0}
                onClick={() => props.onChangeCalendarActiveTab(constObj.calendar.WEEK)}
                className={Utils.className({
                    active: calendarTab === constObj.calendar.WEEK,
                    baseClass: 'calendar-tab__day',
                })}
            >
                {moment(date.day, DateTime.formats.day).format(options.formats.day)}
            </div>

            <div
                role="tab"
                tabIndex={0}
                onClick={() => props.onChangeCalendarActiveTab(constObj.calendar.MONTH)}
                className={Utils.className({
                    active: calendarTab === constObj.calendar.MONTH,
                    baseClass: 'calendar-tab__month',
                })}
            >
                {moment(date.month, DateTime.formats.month).format(options.formats.month)}
            </div>

            <Switcher
                activeTab={activeTab}
                onChangeActiveTab={props.onChangeActiveTab}
                type={type}
            >
                <div
                    role="tab"
                    tabIndex={0}
                    onClick={() => props.onChangeCalendarActiveTab(constObj.calendar.YEAR)}
                    className={Utils.className({
                        active: calendarTab === constObj.calendar.YEAR,
                        baseClass: 'calendar-tab__year',
                    })}
                >
                    {moment(date.year, DateTime.formats.day).format(options.formats.year)}
                </div>
            </Switcher>
        </div>
    );
};

CalendarTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    calendarTab: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    onChangeActiveTab: PropTypes.func.isRequired,
    onChangeCalendarActiveTab: PropTypes.func.isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
    type: PropTypes.string.isRequired,
};

CalendarTab.defaultProps = {
    activeTab: constObj.tab.CALENDAR,
    calendarTab: constObj.calendar.YEAR,
    date: new DateTime(),
    onChangeActiveTab: () => {},
    onChangeCalendarActiveTab: () => {},
    options: new Options(),
    type: constObj.type.ALL,
};

export {CalendarTab};