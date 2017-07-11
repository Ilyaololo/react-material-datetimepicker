/**
 * Created by i.lovenkov on 18.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Utils} from 'utils';

const Cursor = ({disabled, direction, onClick}) => (
    <div
        onClick={onClick}
        role="tab"
        tabIndex={0}
        className={Utils.className({
            active: disabled,
            activeClass: 'disabled',
            baseClass: `cursor cursor__${direction}`
        })}
    >
        <i className="material-icons">{`keyboard_arrow_${direction}`}</i>
    </div>
);

Cursor.UP = 'up';
Cursor.DOWN = 'down';

Cursor.propTypes = {
    direction: PropTypes.oneOf([Cursor.UP, Cursor.DOWN]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Cursor.defaultProps = {
    direction: Cursor.UP,
    disabled: false,
    onClick: () => {},
};

export {Cursor};