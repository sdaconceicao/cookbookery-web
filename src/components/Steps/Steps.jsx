import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, RichTextEditor, Input} from 'sad-shared-components';
import {FormattedMessage} from "react-intl";
import FaClose from "react-icons/lib/fa/close";

export const Steps = ({steps, editable, handleAddStep, handleRemoveStep}) => (
    <div className="steps">
        <ol className='steps-list'>
            {steps && steps.map((step, index)=>{
                return (
                    <li key={step.id} className="step-list__item">
                        {editable
                            ? <Fragment>
                                {!isNaN(step.id) && <Input name="steps.id"
                                       index={index}
                                       type="hidden"
                                       value={step.id}/>}
                                <RichTextEditor name="steps.desc"
                                                     index={index}
                                                     className="with-button"
                                                 value={step.desc}/>
                                <Button type="button"
                                              className="with-input primary"
                                              onClick={()=>handleRemoveStep(index)}>
                                    <FaClose/>
                                </Button>
                            </Fragment>
                            : <div dangerouslySetInnerHTML={{__html: step.desc}}></div>
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