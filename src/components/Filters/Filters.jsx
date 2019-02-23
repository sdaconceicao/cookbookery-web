import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import './Filters.scss';

export class Filters extends Component {

    state = {

    };

    componentDidMount(){

    }

    render() {
        const {className} = this.props;
        return (
            <div className={`filters ${className}`}>

            </div>
        );
    }
}

Filters.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.object.isRequired
};

export default Filters;
