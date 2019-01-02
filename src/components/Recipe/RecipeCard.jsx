import React from 'react';
import PropTypes from 'prop-types';

export const RecipeCard = ({title, desc}) => (
    <div className="recipe">
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
);

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

export default RecipeCard;