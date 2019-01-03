import React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import moment from 'moment';

import IngredientList from 'Components/IngredientList';
import Steps from 'Components/Steps';
import TagsList from 'Components/TagsList';

export const RecipeDetails = ({title, desc, ingredients, servingSize, prepTime, cookTime, tags, steps}) => (
    <article className="recipe">
        <h2>{title}</h2>
        <div>{desc}</div>
        <TagsList tags={tags}/>
        <div><FormattedMessage id={'recipe.prepTime'}/> {moment.duration(prepTime).asMinutes()}</div>
        <div><FormattedMessage id={'recipe.cookTime'}/> {moment.duration(cookTime).asMinutes()}</div>
        <h3><FormattedMessage id='recipe.ingredients'/></h3>
        <IngredientList ingredients={ingredients}/>
        <h3><FormattedMessage id='recipe.steps'/></h3>
        <Steps steps={steps}/>
    </article>
);

RecipeDetails.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    ingredients: PropTypes.array.isRequired,
    servingSize: PropTypes.number,
    prepTime: PropTypes.number,
    cookTime: PropTypes.number,
    tags: PropTypes.array,
    steps: PropTypes.array
};

export default RecipeDetails;