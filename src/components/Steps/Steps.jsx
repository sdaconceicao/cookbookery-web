import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Forms} from 'sad-shared-components';
import {FormattedMessage} from "react-intl";
import FaClose from "react-icons/lib/fa/close";

export const Steps = ({steps, editable, handleAddStep, handleRemoveStep}) => (
    <div className="steps">
        <ol className='steps-list'>
            {steps.map((step, index)=>{
                return (
                    <li key={step.key} className="step-list__item">
                        {editable
                            ? <Fragment>
                                <Forms.RichTextEditor name="step"
                                                     index={index}
                                                     className="with-button"
                                                 value={step.value}/>
                                <Forms.Button type="button"
                                              className="with-input"
                                              onClick={()=>handleRemoveStep(index)}>
                                    <FaClose/>
                                </Forms.Button>
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