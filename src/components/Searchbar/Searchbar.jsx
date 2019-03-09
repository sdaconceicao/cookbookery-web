import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaFilter from 'react-icons/lib/fa/filter';
import FaSearch from 'react-icons/lib/fa/search';

import {Input, Button} from 'sad-shared-components';

import './Searchbar.scss';

export class Searchbar extends Component {

    state = {
        search: ''
    };

    onChange = (e) =>{
        this.setState({search:e.value});
    };

    onKeyDown = (e) =>{
        if (e.keyCode === 13 && this.props.onSearch) {
            this.props.onSearch(this.state.search);
        }
    };

    render() {
        const {className, onSearch} = this.props,
            {search} = this.state;
        return (
            <div className={`searchbar ${className}`}>
                <Input id="search"
                       name="search"
                       className="with-button"
                       value={search}
                       onChange={this.onChange}
                       onKeyDown={this.onKeyDown}
                       placeholder={"Search Recipes..."} />
                <Button className="with-input primary" onClick={()=>onSearch(search)}><FaSearch/></Button>
                <Button className="primary ml-1"><FaFilter/></Button>
            </div>
        );
    }
}

Searchbar.propTypes = {
    className: PropTypes.string,
    onSearch: PropTypes.func.isRequired
};

Searchbar.defaultProps = {
    classname: ''
};

export default Searchbar;
