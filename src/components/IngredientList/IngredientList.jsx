import React from 'react';
import PropTypes from 'prop-types';

export const IngredientList = ({ingredients}) => (
    <ul className='ingredient-list'>
        {ingredients.map(ingredient=>{
            return <li key={ingredient} className="ingredient-list__item">{ingredient}</li>
        })}
    </ul>
);

IngredientList.propTypes = {
    ingredients: PropTypes.array
};

export default IngredientList;