import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {Form, Select, Duration, Button} from 'sad-shared-components';

import './Filters.scss';

export class Filters extends Component {

    state = {
        cookTime: 0,
        prepTime: 0
    };

    comparatorOptions = [
        {
            label: <FormattedMessage id="filters.lessThan"/>,
            value: 'lt'
        },
        {
            label: <FormattedMessage id="filters.greaterThan"/>,
            value: 'gt'
        },
        {
            label: <FormattedMessage id="filters.equals"/>,
            value: 'eq'
        }
    ];

    onSubmit = (filters) =>{
        if(filters.prepTime === 0 || !filters.prepTimeComparator){
            delete filters.prepTime;
            delete filters.prepTimeComparator;
        }
        if(filters.cookTime === 0 || !filters.cookTimeComparator){
            delete filters.cookTime;
            delete filters.cookTimeComparator;
        }
        this.props.handleFilters(filters);
    };

    render() {
        const {className} = this.props,
            {cookTime, prepTime, cookTimeComparator, prepTimeComparator} = this.state;
        return (
            <Form className={`filters ${className}`} onSubmit={this.onSubmit}>
                <ul className="filters__list">
                    <li className="filters__list-item">
                        <Select label={<FormattedMessage id="filters.prepTime"/>}
                                name="prepTimeComparator"
                                value={prepTimeComparator}
                                options={this.comparatorOptions}/>
                        <Duration name="prepTime"
                                  value={prepTime}/>
                    </li>
                    <li className="filters__list-item">
                        <Select label={<FormattedMessage id="filters.cookTime"/>}
                                name="cookTimeComparator"
                                value={cookTimeComparator}
                                options={this.comparatorOptions}/>
                        <Duration name="cookTime"
                                  value={cookTime}/>
                    </li>
                    <li className="filters__list-item">
                        <Button className="primary" type="submit"><FormattedMessage id="filters.apply"/></Button>
                    </li>
                </ul>
            </Form>
        );
    }
}

Filters.propTypes = {
    className: PropTypes.string,
    handleFilters: PropTypes.func.isRequired
};

export default Filters;
