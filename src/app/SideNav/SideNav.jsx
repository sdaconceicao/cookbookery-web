import React from 'react';
import PropTypes from 'prop-types';

export const SideNav = ({className}) => (
    <nav className={`side-nav ${className}`}>

    </nav>
);

SideNav.propTypes = {
    className: PropTypes.string
};

export default SideNav;
