import React from 'react';
import PropTypes from 'prop-types';

export const RecipeCard = (props) => {
    const {title, desc} = props;
    return (
        <div className="recipe" {...props} >
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

export default RecipeCard;