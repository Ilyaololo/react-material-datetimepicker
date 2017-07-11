/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Day} from './Day';

const Week = ({weekNumber, year}) => {
    const result = Week.weekDayNumber
        .map((item) => (
            <Day
                key={`Day-${item}`}
                day={moment(`${weekNumber} ${item} ${year}`, 'w d YYYY').format('DD')}
            />
        ));

    return (
        <div className="days__item">
            {result}
        </div>
    );
};

Week.weekDayNumber = [1, 2, 3, 4, 5, 6, 0];

Week.propTypes = {
    weekNumber: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
};

Week.defaultProps = {
    weekNumber: 1,
    year: 1,
};

export {Week};