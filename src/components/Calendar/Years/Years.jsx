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

const Years = ({date, options}) => {
    const cur = parseInt(date.year, 10);
    const min = cur - options.calendar.leftOffset;
    const max = cur + options.calendar.rightOffset;

    const result = Utils.range({min, max, cur})
        .map((item) => (
            <Item
                active={parseInt(item, 10) === parseInt(date.year, 10)}
                className="years__item"
                key={`Year-${item}`}
                value={moment(item, DateTime.formats.year).format(options.formats.year)}
            />
        ));

    return (
        <div className="years">
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

Years.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Years.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Years};