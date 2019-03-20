import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {Form, Select, Duration, Button} from 'sad-shared-components';

import './Filters.scss';

export class Filters extends Component {

    state = {
        orderBy: 'title',
        cookTime: 0,
        prepTime: 0
    };


    orderByOptions = [
        {
            label: <FormattedMessage id="recipe.title"/>,
            value: 'title'
        },
        {
            label: <FormattedMessage id="recipe.desc"/>,
            value: 'desc'
        }
    ];

    comparatorOptions = [
        {
            label: <FormattedMessage id="filters.lessThan"/>,
            value: '<'
        },
        {
            label: <FormattedMessage id="filters.greaterThan"/>,
            value: '>'
        },
        {
            label: <FormattedMessage id="filters.equals"/>,
            value: '='
        }
    ];

    render() {
        const {className, handleFilters} = this.props,
            {orderBy, cookTime, prepTime, cookTimeComparator, prepTimeComparator} = this.state;
        return (
            <Form className={`filters ${className}`} onSubmit={handleFilters}>
                <ul className="filters__list">
                    <li className="filters__list-item">
                        <Select label={<FormattedMessage id="filters.orderBy"/>}
                                name="orderBy"
                                value={orderBy}
                                options={this.orderByOptions}/>
                    </li>
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
