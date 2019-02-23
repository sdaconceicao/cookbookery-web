import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import FaFilter from 'react-icons/lib/fa/filter';
import FaSearch from 'react-icons/lib/fa/search';
import FaPlus from 'react-icons/lib/fa/plus-square';

import {Input, Button} from 'sad-shared-components';

import './SubNav.scss';

export class SubNav extends Component {

    state = {};

    render() {
        const {className} = this.props,
            {search} = this.state;
        return (
            <nav className={`sub-nav row ${className}`}>
                <span className="sub-nav__add col-3">
                    <Link className="btn primary" to="/recipe/add"><FaPlus/> <FormattedMessage id="recipe.add"/></Link>
                </span>
                <span className="sub-nav__search col-9">
                    <Input id="search" name="search" className="with-button"
                           value={search}
                           placeholder={"Search Recipes..."} />
                    <Button className="with-input primary"><FaSearch/></Button>
                    <Button className="primary ml-1"><FaFilter/></Button>
                </span>
            </nav>
        );
    }
}

SubNav.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.object.isRequired
};

export default SubNav;
