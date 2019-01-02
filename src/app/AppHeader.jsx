import React, { Component } from 'react';
import MdDehaze from 'react-icons/lib/md/dehaze';
import MdSettings from 'react-icons/lib/md/settings';
import {Link} from 'react-router-dom';

import './AppHeader.scss';

export class AppHeader extends Component {

    render() {
        return (
            <header className="app-header row">
                <div className="col-9 app-header__main">
                    <Link to="/"><MdDehaze/></Link>
                    <span className="logo">Cookbookery</span>
                </div>
                <div className="col-3 app-header__settings">
                    <Link to='/preferences'><MdSettings/></Link>
                </div>
            </header>
        );
    }
}

export default AppHeader;