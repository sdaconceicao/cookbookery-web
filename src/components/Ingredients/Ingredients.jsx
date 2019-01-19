import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Forms} from 'sad-shared-components';
import {FormattedMessage} from "react-intl";

export const Ingredients = ({ingredients, editable, handleAddIngredient, handleRemoveIngredient}) => (
    <div className="ingredients">
        <ul className='ingredients-list'>
            {ingredients.map((ingredient, index)=>{
                return (
                    <li key={ingredient.key} className="ingredient-list__item">
                        {editable
                            ? <Fragment>
                                <Forms.TextInput name="ingredient" index={index}
                                                 value={ingredient.value}/>
                                <button type="button" onClick={()=>handleRemoveIngredient(index)}>X</button>
                            </Fragment>
                            : ingredient.value
                        }
                    </li>
                )
            })}

        </ul>
        {editable &&
            <Forms.Button onClick={handleAddIngredient}><FormattedMessage id="recipe.ingredients.add"/></Forms.Button>
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