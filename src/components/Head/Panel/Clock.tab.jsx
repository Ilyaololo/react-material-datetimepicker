/**
 * Created by i.lovenkov on 15.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Switcher} from 'components/Head';
import {Constants, DateTime, Options} from 'models';

const constObj = new Constants();

const ClockTab = (props) => {
    const {activeTab, date, options, type} = props;

    return (
        <div className="clock-tab">
            <div className="time">
                <div className="time__hour">
                    {moment(date.hour, DateTime.formats.hour).format(options.formats.hour)}
                </div>

                <div className="time__minute">
                    {moment(date.minute, DateTime.formats.minute).format(options.formats.minute)}
                </div>
            </div>

            <Switcher
                activeTab={activeTab}
                onChangeActiveTab={props.onChangeActiveTab}
                type={type}
            />
        </div>
    );
};

ClockTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    onChangeActiveTab: PropTypes.func.isRequired,
    options: PropTypes.instanceOf(Options).isRequired,
    type: PropTypes.string.isRequired,
};

ClockTab.defaultProps = {
    activeTab: constObj.tab.CALENDAR,
    date: new DateTime(),
    onChangeActiveTab: () => {},
    options: new Options(),
    type: constObj.type.ALL,
};

export {ClockTab};