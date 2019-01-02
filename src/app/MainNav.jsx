import React, { Component } from 'react';
import MdDehaze from 'react-icons/lib/md/dehaze';
import MdSettings from 'react-icons/lib/md/settings';
import {Link} from 'react-router-dom';

import './MainNav.scss';

export class MainNav extends Component {

    render() {
        return (
            <header className={`${this.props.className} main-nav row`}>
                <div className="col-9 main-nav__logo">
                    <Link to="/"><MdDehaze/></Link>
                    <span className="main-nav__logo-name">Cookbookery</span>
                </div>
                <div className="col-3 main-nav__settings">
                    <Link to='/preferences'><MdSettings/></Link>
                </div>
            </header>
        );
    }
}

export default MainNav;