import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import FaList from 'react-icons/lib/fa/list-ul';
import FaPlus from 'react-icons/lib/fa/plus-square';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

import {Button} from 'sad-shared-components';

import './SideNav.scss';

export const SideNav = ({className, handleClose}) => (
    <nav className={`side-nav ${className}`}>
        <header className="side-nav__header">
            <h3><FormattedMessage id="menu.title"/></h3>
            <Button className="side-nav__close primary" onClick={handleClose}><FaClose/></Button>
        </header>
        <ul className="side-nav__list">
            <li className="side-nav__list-item">
                <Link to='/'
                      onClick={handleClose}
                      className="inverted"><FaList/> <FormattedMessage id="menu.recipeList"/>
                </Link>
            </li>
            <li className="side-nav__list-item">
                <Link to='/recipe/add'
                      onClick={handleClose}
                      className="inverted"><FaPlus/> <FormattedMessage id="recipe.add"/>
                </Link>
            </li>
        </ul>
    </nav>
);

SideNav.propTypes = {
    className: PropTypes.string
};

export default SideNav;
