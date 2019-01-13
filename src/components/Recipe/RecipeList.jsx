import React from "react";
import PropTypes from 'prop-types';

import './RecipeList.scss';

export const RecipeList = ({recipes, render}) => (
    <ul className="recipe-list">
        {recipes && recipes.map(recipe => (
            <li key={recipe.id}
                className="recipe-list__item">
                {render(recipe)}
            </li>
        ))}
    </ul>
);

RecipeList.propTypes = {
    recipes: PropTypes.array
};

export default RecipeList;