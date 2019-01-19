import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Forms} from 'sad-shared-components';
import {FormattedMessage} from "react-intl";

export const Steps = ({steps, editable, handleAddStep, handleRemoveStep}) => (
    <div className="steps">
        <ol className='steps-list'>
            {steps.map((step, index)=>{
                return (
                    <li key={step.key} className="step-list__item">
                        {editable
                            ? <Fragment>
                                <Forms.Textarea name="step" index={index}
                                                 value={step.value}/>
                                <button type="button" onClick={()=>handleRemoveStep(index)}>X</button>
                            </Fragment>
                            : step.value
                        }
                    </li>
                )
            })}

        </ol>
        {editable &&
        <Forms.Button onClick={handleAddStep}><FormattedMessage id="recipe.steps.add"/></Forms.Button>
        }
    </div>
);

Steps.propTypes = {
    ingredients: PropTypes.array,
    editable: PropTypes.bool,
    handleAddStep: PropTypes.func,
    handleRemoveStep: PropTypes.func
};

Steps.defaultProps = {
    editable: false
};

export default Steps;