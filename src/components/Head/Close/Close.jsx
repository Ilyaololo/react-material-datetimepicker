/**
 * Created by i.lovenkov on 14.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Close = ({onClose}) => (
    <div
        className="head__close"
        onClick={onClose}
        role="button"
        tabIndex={0}
    >
        <i className="material-icons">close</i>
    </div>
);

Close.propTypes = {
    onClose: PropTypes.func.isRequired,
};

Close.defaultProps = {
    onClose: () => {},
};

export {Close};