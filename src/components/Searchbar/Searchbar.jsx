import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaFilter from 'react-icons/lib/fa/filter';
import FaSearch from 'react-icons/lib/fa/search';

import {Input, Button} from 'sad-shared-components';

import './Searchbar.scss';

export class Searchbar extends Component {

    state = {};

    render() {
        const {className} = this.props,
            {search} = this.state;
        return (
            <div className={`searchbar ${className}`}>
                <Input id="search" name="search" className="with-button"
                       value={search}
                       placeholder={"Search Recipes..."} />
                <Button className="with-input primary"><FaSearch/></Button>
                <Button className="primary ml-1"><FaFilter/></Button>
            </div>
        );
    }
}

Searchbar.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.object.isRequired
};

Searchbar.defaultProps = {
    classname: ''
};

export default Searchbar;
