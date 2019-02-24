import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

import {Button} from 'sad-shared-components';

import './SideNav.scss';

export const SideNav = ({className, handleClose}) => (
    <nav className={`side-nav ${className}`}>
        <Button className="side-nav__close" onClick={handleClose}><FaClose/></Button>
        <ul className="side-nav__list">
            <li className="side-nav__list-item"><Link to='/' onClick={handleClose} className="inverted"><FormattedMessage id="menu.recipeList"/></Link></li>
        </ul>
    </nav>
);

SideNav.propTypes = {
    className: PropTypes.string
};

export default SideNav;
