import React from 'react';
import PropTypes from 'prop-types';

import {BackgroundImage} from 'sad-shared-components';

import './RecipeCard.scss';

export const RecipeCard = (props) => {
    const {title, desc, image} = props;
    return (
        <div className="recipe-card" {...props} >
            <BackgroundImage className="recipe-card__image" alt={title} src={image}/>
            <div className="recipe-card__content">
                <h4 className="recipe-card__title">{title}</h4>
                <div className="recipe-card__desc">{desc}</div>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

export default RecipeCard;