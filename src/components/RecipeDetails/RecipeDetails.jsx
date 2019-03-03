import React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import {BackgroundImage, DurationView} from 'sad-shared-components';

import Ingredients from 'Components/Ingredients';
import Steps from 'Components/Steps';
import TagsList from 'Components/TagsList';

import './RecipeDetails.scss';

export const RecipeDetails = ({title, desc, image, ingredients, servingSize, prepTime, cookTime, tags, steps}) => (
    <article className="recipe">
        <BackgroundImage src={image} className="recipe__image"/>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{__html:desc}}></div>
        <div><FormattedMessage id={'recipe.servingSize'}/> {servingSize}</div>
        <TagsList tags={tags}/>
        <div><FormattedMessage id={'recipe.prepTime'}/> <DurationView value={prepTime}/></div>
        <div><FormattedMessage id={'recipe.cookTime'}/> <DurationView value={cookTime}/></div>
        <h3><FormattedMessage id='recipe.ingredients'/></h3>
        <Ingredients ingredients={ingredients}/>
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