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

const Minutes = ({date, options}) => {
    const minute = parseInt(date.minute, 10);
    const min = options.clock.minute.min;
    const max = options.clock.minute.max;
    const step = options.clock.minute.step;
    const offset = 10;
    const cur = minute - Math.round(minute % (offset / 2));

    const result = Utils.range({min, max, cur, step, offset})
        .map((item) => (
            <Item
                active={parseInt(item, 10) === parseInt(date.minute, 10)}
                className="minutes__item"
                key={`Minute-${item}`}
                value={moment(item, DateTime.formats.minute).format(options.formats.minute)}
            />
        ));

    return (
        <div className="minutes">
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

Minutes.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Minutes.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Minutes};