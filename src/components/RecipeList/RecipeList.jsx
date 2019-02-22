import React from "react";
import PropTypes from 'prop-types';

import './RecipeList.scss';

export const RecipeList = ({recipes, render, className}) => (
    <ul className={`recipe-list ${className}`}>
        {recipes && recipes.map(recipe => (
            <li key={recipe.id}
                className="recipe-list__item">
                {render(recipe)}
            </li>
        ))}
    </ul>
);

RecipeList.propTypes = {
    recipes: PropTypes.array,
    className: PropTypes.string,
    render: PropTypes.func.isRequired
};

export default RecipeList;