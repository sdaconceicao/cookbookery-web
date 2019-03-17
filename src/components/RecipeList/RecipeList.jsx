import React from "react";
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {Alert} from 'sad-shared-components';

import './RecipeList.scss';

export const RecipeList = ({recipes, render, className}) => (
    <ul className={`recipe-list ${className}`}>
        {recipes && recipes.length > 0 ? recipes.map(recipe => (
            <li key={recipe.id}
                className="recipe-list__item">
                {render(recipe)}
            </li>
        ))
        : <Alert type="branded">
                <FormattedMessage id="recipes.none"/>
          </Alert>}

    </ul>
);

RecipeList.propTypes = {
    recipes: PropTypes.array,
    className: PropTypes.string,
    render: PropTypes.func.isRequired
};

export default RecipeList;