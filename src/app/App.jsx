import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {IntlProvider} from "react-intl";

import AppHeader from './AppHeader';
import * as enMessage from '../translations/en.json';
import Pages from 'Pages';

import './App.scss';

export class App extends Component {

    render() {
        return (
            <IntlProvider locale="en" messages={enMessage}>
                <Router>
                    <div className="app container-fluid">
                        <AppHeader/>
                        <main className="app__content row">
                            <Pages/>
                        </main>
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
