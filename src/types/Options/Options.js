/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import PropTypes from 'prop-types';

const ClockParamsType = {
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
};

const ClockType = {
    clock: PropTypes.shape(ClockParamsType),
    hour: PropTypes.shape(ClockParamsType),
};

const CalendarOffsetType = {
    leftOffset: PropTypes.number,
    rightOffset: PropTypes.number,
};

const OptionsFormatType = {
    day: PropTypes.string,
    hour: PropTypes.string,
    minute: PropTypes.string,
    month: PropTypes.string,
    timeZone: PropTypes.string,
    week: PropTypes.string,
    weekDay: PropTypes.string,
    year: PropTypes.string,
};

export const OptionsType = {
    calendar: PropTypes.shape(CalendarOffsetType),
    clock: PropTypes.shape(ClockType),
    format: PropTypes.shape(OptionsFormatType),
    lang: PropTypes.string,
};