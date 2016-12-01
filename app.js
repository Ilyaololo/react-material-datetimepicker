"use strict";

import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

import { DataTimePicker } from './src';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DataTimePicker />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
