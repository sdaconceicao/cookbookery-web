import React from 'react';
import PropTypes from 'prop-types';
import MdDehaze from 'react-icons/lib/md/dehaze';
import MdSettings from 'react-icons/lib/md/settings';
import {Link} from 'react-router-dom';

import {Button} from 'sad-shared-components';

import './MainNav.scss';

export const MainNav = ({className, handleMenuClick}) => (
    <nav className={`main-nav row ${className}`}>
        <div className="col-9 main-nav__logo">
            <Button className="main-nav__menu primary invert" onClick={handleMenuClick}><MdDehaze/></Button>
            <Link to="/" className="main-nav__logo-name">Cookbookery</Link>
        </div>
        <div className="col-3 main-nav__settings">
            <Link to='/preferences' className="main-nav__link"><MdSettings/></Link>
        </div>
    </nav>
);

MainNav.propTypes = {
    className: PropTypes.string,
    handleMenuClick: PropTypes.func.isRequired
};

MainNav.defaultValue = {
    className: ''
};

export default MainNav;