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

const Months = ({date, options}) => {
    moment.locale(options.lang);

    const cur = parseInt(date.month, 10);
    const min = 1;
    const max = 12;

    const result = Utils.range({min, max, cur})
        .map((item) => (
            <Item
                active={parseInt(item, 10) === parseInt(date.month, 10)}
                className="months__item"
                key={`Month-${item}`}
                value={moment(item, DateTime.formats.month).format(options.formats.month)}
            />
        ));

    return (
        <div className="months">
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

Months.propTypes = {
    date: PropTypes.instanceOf(DateTime).isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
};

Months.defaultProps = {
    date: new DateTime(),
    options: new Options(),
};

export {Months};