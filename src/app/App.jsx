import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {IntlProvider} from "react-intl";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import MainNav from './MainNav';
import * as enMessages from '../translations/en.json';
import {enMessages as sharedEnMessages} from 'sad-shared-components';
import Pages from 'Pages';

import './Styles/index.scss';
import './App.scss';

export class App extends Component {

    render() {

        return (
            <IntlProvider locale="en" messages={Object.assign(enMessages, sharedEnMessages)}>
                <Router>
                    <Route render={({ location }) => (
                        <div className="app container-fluid">
                            <header className="app__header">
                                <MainNav/>
                            </header>
                            <main className="app__content row">
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
