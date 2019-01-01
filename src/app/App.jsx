import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {IntlProvider} from "react-intl";

import * as enMessage from '../translations/en.json';
import Pages from '../pages/index';

import './App.scss';

export class App extends Component {

    render() {

        return (
            <div className="app">
                <IntlProvider locale="en" messages={enMessage}>
                    <Router>
                        <Pages/>
                    </Router>
                </IntlProvider>
            </div>
        );
    }
}

export default App;
