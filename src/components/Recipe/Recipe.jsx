import React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import moment from 'moment';

export const Recipe = ({title, desc, ingredients, servingSize, prepTime, cookTime, tags, steps}) => (
    <div className="recipe">
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul className='recipe_tags'>
            {tags.map(tag=>{
                return <li className="recipe__tag">{tag}</li>
            })}
        </ul>
        <div><FormattedMessage id={'recipe.prepTime'}/> {moment.duration(prepTime).asMinutes()}</div>
        <div><FormattedMessage id={'recipe.cookTime'}/> {moment.duration(cookTime).asMinutes()}</div>
        <h3><FormattedMessage id='recipe.ingredients'/></h3>
        <ul className='recipe__ingredients'>
            {ingredients.map(ingredient=>{
                return <li className="recipe__ingredient">{ingredient}</li>
            })}
        </ul>
        <h3><FormattedMessage id='recipe.steps'/></h3>
        <ol className='recipe__steps'>
            {steps.map(step=>{
                return <li className="recipe__step">{step}</li>
            })}
        </ol>
    </div>
);

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    ingredients: PropTypes.array.isRequired,
    servingSize: PropTypes.number,
    prepTime: PropTypes.number,
    cookTime: PropTypes.number,
    tags: PropTypes.array,
    steps: PropTypes.array
};

export default Recipe;