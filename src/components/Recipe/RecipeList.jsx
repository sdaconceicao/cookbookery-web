import React from "react";
import PropTypes from 'prop-types';

export const RecipeList = ({recipes, render}) => (
    <ul className="recipes-list">
        {recipes && recipes.map(recipe => (
            <li key={recipe.id}
                className="recipe-list-item">
                {render(recipe)}
            </li>
        ))}
    </ul>
);

RecipeList.propTypes = {
    recipes: PropTypes.array
};

export default RecipeList;