import React from 'react';
import PropTypes from 'prop-types';

export const Steps = ({steps}) => (
    <ol className='steps'>
        {steps.map(step=>{
            return <li key={step} className="steps__item">{step}</li>
        })}
    </ol>
);

Steps.propTypes = {
    steps: PropTypes.array
};

export default Steps;