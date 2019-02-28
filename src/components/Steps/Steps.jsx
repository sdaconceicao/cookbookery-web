import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, RichTextEditor} from 'sad-shared-components';
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
                                <RichTextEditor name="step"
                                                     index={index}
                                                     className="with-button"
                                                 value={step.value}/>
                                <Button type="button"
                                              className="with-input primary"
                                              onClick={()=>handleRemoveStep(index)}>
                                    <FaClose/>
                                </Button>
                            </Fragment>
                            : step.value
                        }
                    </li>
                )
            })}

        </ol>
        {editable &&
        <Button className="primary block"
                      onClick={handleAddStep}>
            <FormattedMessage id="recipe.steps.add"/>
        </Button>
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