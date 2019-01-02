import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {IntlProvider} from "react-intl";

import MainNav from './MainNav';
import * as enMessage from '../translations/en.json';
import Pages from 'Pages';

import './App.scss';

export class App extends Component {

    render() {
        return (
            <IntlProvider locale="en" messages={enMessage}>
                <Router>
                    <div className="app container-fluid">
                        <MainNav className="app__header"/>
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
