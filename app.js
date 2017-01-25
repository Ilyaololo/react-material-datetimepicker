"use strict";

import React, { Component, PropTypes }  from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ReactDOM from 'react-dom';

import { DataTimePicker } from './src';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <DataTimePicker />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
