/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Months, Weeks, Years} from 'components/Calendar';
import {Constants, DateTime, Options} from 'models';

const constObj = new Constants();

const Calendar = ({calendarTab, date, options}) => {
    switch (calendarTab) {
        case constObj.calendar.YEAR: {
            return (
                <div className="calendar">
                    <Years
                        date={date}
                        options={options}
                    />
                </div>
            );
        }

        case constObj.calendar.MONTH: {
            return (
                <div className="calendar">
                    <Months
                        date={date}
                        options={options}
                    />
                </div>
            );
        }

        case constObj.calendar.WEEK: {
            return (
                <div className="calendar">
                    <Weeks
                        date={date}
                        options={options}
                    />
                </div>
            );
        }

        default: {
            return null;
        }
    }
};

Calendar.propTypes = {
    calendarTab: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Calendar.defaultProps = {
    calendarTab: constObj.calendar.YEAR,
    date: new DateTime(),
    options: new Options(),
};

export {Calendar};