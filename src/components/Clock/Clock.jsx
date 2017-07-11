/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Hours, Minutes} from 'components/Clock';
import {DateTime, Options} from 'models';

const Clock = ({date, options}) => (
    <div className="clock">
        <Hours
            date={date}
            options={options}
        />

        <Minutes
            date={date}
            options={options}
        />
    </div>
);

Clock.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Clock.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Clock};