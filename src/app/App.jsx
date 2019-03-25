import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {IntlProvider} from "react-intl";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {enMessages as sharedEnMessages} from 'sad-shared-components';
import {enMessages} from 'cookbookery-shared';

import MainNav from 'Components/MainNav';
import SideNav from "Components/SideNav"
import Pages from 'Pages';

import './App.scss';

export class App extends Component {

    state = {
        sideNavOpen: false
    };

    handleSideNavOpen = (sideNavOpen) =>{
        this.setState({sideNavOpen});
    };

    render() {
        const {sideNavOpen} = this.state;
        return (
            <IntlProvider locale="en" messages={Object.assign(enMessages, sharedEnMessages)}>
                <Router>
                    <div className="app">
                        <header className="app__header container-fluid">
                            <MainNav handleMenuClick={()=>this.handleSideNavOpen(true)}/>
                        </header>
                        <aside className={`app__sidenav ${sideNavOpen ? 'open' : 'closed'}`}>
                            <SideNav handleClose={()=>this.handleSideNavOpen(false)}/>
                        </aside>
                        <main className="app__content" onClick={()=>this.handleSideNavOpen(false)}>
                            <Route render={({ location }) => (
                                <TransitionGroup component={Fragment}>
                                    <CSSTransition
                                        timeout={{enter: 500, exit: 300}}
                                        classNames="fadeIn"
                                        key={location.key}>
                                        <Pages location={location}/>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}/>
                        </main>
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
