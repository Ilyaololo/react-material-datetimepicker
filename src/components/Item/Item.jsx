/**
 * Created by i.lovenkov on 19.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Utils} from 'utils';

const Item = ({active, className, onClick, value}) => (
    <div
        className={Utils.className({active, baseClass: className})}
        onClick={() => onClick(value)}
        role="tab"
        tabIndex={0}
    >
        {value}
    </div>
);

Item.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
};

Item.defaultProps = {
    active: false,
    className: '',
    onClick: () => {},
    value: '',
};

export {Item};