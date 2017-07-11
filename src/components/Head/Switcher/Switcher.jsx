/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Constants} from 'models';
import {Tab} from './Tab';

const constObj = new Constants();

const Switcher = (props) => {
    const {activeTab, children, type} = props;

    let left = null,
        right = null;

    if (type === constObj.type.ALL) {
        left = (
            <Tab
                active={activeTab === constObj.tab.CALENDAR}
                icon="grid_on"
                onClick={() => props.onChangeActiveTab(constObj.tab.CALENDAR)}
            />
        );

        right = (
            <Tab
                active={activeTab === constObj.tab.CLOCK}
                icon="access_time"
                onClick={() => props.onChangeActiveTab(constObj.tab.CLOCK)}
            />
        );
    }

    return (
        <div className="switcher">
            {left}
            {children}
            {right}
        </div>
    );
};

Switcher.propTypes = {
    activeTab: PropTypes.string.isRequired,
    children: PropTypes.node,
    onChangeActiveTab: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

Switcher.defaultProps = {
    activeTab: constObj.tab.CALENDAR,
    children: null,
    onChangeActiveTab: () => {},
    type: constObj.type.ALL,
};

export {Switcher};