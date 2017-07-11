/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Cursor, Item} from 'components';
import {DateTime, Options} from 'models';
import {Utils} from 'utils';

const Hours = ({date, options}) => {
    const cur = parseInt(date.hour, 10);
    const min = options.clock.hour.min;
    const max = options.clock.hour.max;

    const result = Utils.range({min, max, cur})
        .map((item) => (
            <Item
                active={parseInt(item, 10) === parseInt(date.hour, 10)}
                className="hours__item"
                key={`Hour-${item}`}
                value={moment(item, DateTime.formats.hour).format(options.formats.hour)}
            />
        ));

    return (
        <div className="hours">
            <Cursor
                disabled={cur === min}
                direction={Cursor.UP}
            />

            {result}

            <Cursor
                disabled={cur === max}
                direction={Cursor.DOWN}
            />
        </div>
    );
};

Hours.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Hours.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Hours};