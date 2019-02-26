import React from 'react';
import PropTypes from 'prop-types';

import './HeaderNav.scss';

export const HeaderNav = ({children, className}) => (
    <header className={`header-nav row ${className}`}>
        {children}
    </header>
);


HeaderNav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array.isRequired
};

export default HeaderNav;
