/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Day = ({day}) => {
    // console.log(day);

    return (
        <div>
            {day}
        </div>
    );
};

Day.propTypes = {
    day: PropTypes.string.isRequired,
};

Day.defaultProps = {
    day: 1,
};

export {Day};