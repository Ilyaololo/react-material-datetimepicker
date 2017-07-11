/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {DateTime, Options} from 'models';
import {Utils} from 'utils';

import {Week} from './Week';

const Weeks = ({date, options}) => {
    moment.locale(options.lang);

    const month = moment(date.month, DateTime.formats.month).format(DateTime.formats.month);
    const year = moment(date.year, DateTime.formats.year).format(DateTime.formats.year);

    const cur = parseInt(moment(`01-${month}-${year}`, 'DD-MM-YYYY').format('w'), 10);
    const max = parseInt(moment(year, DateTime.formats.year).weeksInYear(), 10);

    const result = Utils.getWeeksNumbers({cur, max})
        .map((item) => (
            <Week
                key={`Week-${item}`}
                weekNumber={item}
                year={year}
            />
        ));

    const weekDays = Week.weekDayNumber
        .map((item) => (
            <div
                className="weekdays__item"
                key={`weekDayNumber-${item}`}
            >
                {moment(item, 'd').format('dd')}
            </div>
        ));

    return (
        <div className="weeks">
            <div className="weekdays">
                {weekDays}
            </div>

            <div className="days">
                {result}
            </div>
        </div>
    );
};

Weeks.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Weeks.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Weeks};
