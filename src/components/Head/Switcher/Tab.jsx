/**
 * Created by i.lovenkov on 16.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Utils} from 'utils';

const Tab = ({active, icon, onClick}) => (
    <div
        role="tab"
        tabIndex={0}
        onClick={onClick}
        className={Utils.className({
            active,
            baseClass: 'switcher__tab'
        })}
    >
        <i className="material-icons">{icon}</i>
    </div>
);

Tab.propTypes = {
    active: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
    active: false,
    icon: '',
    onClick: () => {},
};

export {Tab};