import React, { Component } from 'react';
import MdDehaze from 'react-icons/lib/md/dehaze';
import MdSettings from 'react-icons/lib/md/settings';
import {Link} from 'react-router-dom';

import './MainNav.scss';

export class MainNav extends Component {

    render() {
        return (
            <nav className="main-nav row">
                <div className="col-9 main-nav__logo">
                    <Link to="/" className="main-nav__link"><MdDehaze/></Link>
                    <span className="main-nav__logo-name">Cookbookery</span>
                </div>
                <div className="col-3 main-nav__settings">
                    <Link to='/preferences' className="main-nav__link"><MdSettings/></Link>
                </div>
            </nav>
        );
    }
}

export default MainNav;