import React from 'react';
import PropTypes from 'prop-types';

import './RecipeCard.scss';

export const RecipeCard = (props) => {
    const {title, desc, image} = props;
    return (
        <div className="recipe-card" {...props} >
            <img className="recipe-card__image" alt={title} src={image}/>
            <label className="recipe-card__title">{title}</label>
            <p className="recipe-card__desc">{desc}</p>
        </div>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

export default RecipeCard;