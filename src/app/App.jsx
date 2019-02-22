import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {IntlProvider} from "react-intl";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './Styles/index.scss'; //Need to load bootstrap styles before page/component styles

import MainNav from './MainNav';
import Pages from 'Pages';
import * as enMessages from '../translations/en.json';
import {enMessages as sharedEnMessages} from 'sad-shared-components';

import './App.scss';

export class App extends Component {

    render() {

        return (
            <IntlProvider locale="en" messages={Object.assign(enMessages, sharedEnMessages)}>
                <Router>
                    <Route render={({ location }) => (
                        <div className="app">
                            <header className="app__header container-fluid">
                                <MainNav/>
                            </header>
                            <main className="app__content">
                                <TransitionGroup component={Fragment}>
                                    <CSSTransition
                                        timeout={{enter: 500, exit: 300}}
                                        classNames="fadeIn"
                                        key={location.key}>
                                        <Pages location={location}/>
                                    </CSSTransition>
                                </TransitionGroup>
                            </main>
                        </div>
                    )}
                    />
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
