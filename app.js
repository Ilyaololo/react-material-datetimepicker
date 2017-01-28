"use strict";

import React, { PureComponent, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

import { DataTimePicker } from './src';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.displayName = "App";
    }

    render() {
        return (
            <DataTimePicker
                showCalendar={ false }
                showClock={ true }
                type={ false }
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
