import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'sad-shared-components';
import {FormattedMessage} from "react-intl";

import FaClose from 'react-icons/lib/fa/close';

export const Ingredients = ({ingredients, editable, handleAddIngredient, handleRemoveIngredient}) => (
    <div className="ingredients">
        <ul className='ingredients-list'>
            {ingredients.map((ingredient, index)=>{
                return (
                    <li key={ingredient.key} className="ingredient-list__item">
                        {editable
                            ? <Fragment>
                                <Input name="ingredient"
                                             className="with-button"
                                             index={index}
                                             value={ingredient.value}/>
                                <Button type="button"
                                              className="with-input primary"
                                              onClick={()=>handleRemoveIngredient(index)}>
                                    <FaClose/>
                                </Button>
                            </Fragment>
                            : ingredient.value
                        }
                    </li>
                )
            })}

        </ul>
        {editable &&
            <Button className="primary block"
                          onClick={handleAddIngredient}>
                <FormattedMessage id="recipe.ingredients.add"/>
            </Button>
        }
    </div>
);

Ingredients.propTypes = {
    ingredients: PropTypes.array,
    editable: PropTypes.bool,
    handleAddIngredient: PropTypes.func,
    handleRemoveIngredient: PropTypes.func
};

Ingredients.defaultProps = {
    editable: false
};

export default Ingredients;