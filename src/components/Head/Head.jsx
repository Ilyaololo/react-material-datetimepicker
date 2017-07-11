/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Close, Panel} from 'components/Head';
import {Constants, DateTime, Options} from 'models';

const constObj = new Constants();

const Head = (props) => {
    const {activeTab, calendarTab, date, onClose, options, type} = props;

    moment.locale(options.lang);

    return (
        <div className="head">
            <Close onClose={onClose} />

            <div className="head__weekday">
                {moment(date.weekDay, DateTime.formats.weekDay).format(options.formats.weekDay)}
            </div>

            <Panel
                activeTab={activeTab}
                calendarTab={calendarTab}
                date={date}
                onChangeActiveTab={props.onChangeActiveTab}
                onChangeCalendarActiveTab={props.onChangeCalendarActiveTab}
                options={options}
                type={type}
            />
        </div>
    );
};

Head.propTypes = {
    activeTab: PropTypes.string.isRequired,
    calendarTab: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    onChangeActiveTab: PropTypes.func.isRequired,
    onChangeCalendarActiveTab: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
    type: PropTypes.string.isRequired,
};

Head.defaultProps = {
    activeTab: constObj.tab.CALENDAR,
    calendarTab: constObj.calendar.YEAR,
    date: new DateTime(),
    onChangeActiveTab: () => {},
    onChangeCalendarActiveTab: () => {},
    onClose: () => {},
    options: new Options(),
    type: constObj.type.ALL,
};

export {Head};