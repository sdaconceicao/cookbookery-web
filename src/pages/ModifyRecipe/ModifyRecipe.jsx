import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {FormattedMessage} from 'react-intl';
import {Form, Forms} from "sad-shared-components";

export class ModifyRecipe extends Component {

    state = {
        loading: true,
        saving: false,
        creating: !this.props.match.params.id
    };

    componentDidMount(){
        this.props.match.params.id
            ? axios.get(`/recipes/${this.props.match.params.id}`)
                .then(response=>{
                    this.setState({loading: false, recipe: response.data, ingredients: response.data.ingredients});
                }).catch(error=>{
                console.error("ERROR in retrieving recipe", error);
            })
            : this.setState({loading: false, recipe: {}});
    }

    onSubmit = (e) => {
        this.setState({saving: true});
        console.log(e);
        this.state.creating
            ? axios.post(`/recipes`, e.data).then(() => {
                this.setState({saving: false});
            })
            : axios.put(`/recipes/${this.props.match.params.id}`, e.data).then(() => {
                this.setState({saving: false});
            })
    };

    handleAddIngredient = () =>{
        const {ingredients} = this.state;
        ingredients.push('');
        this.setState({ingredients});
    };

    render() {
        const {recipe, creating, ingredients} = this.state;
        return (
            <div className='modify-recipe'>
                <h2>
                    {creating
                        ? <FormattedMessage id='recipe.create'/>
                        : <FormattedMessage id='recipe.edit'/>
                    }
                </h2>
                {recipe &&
                <Form onSubmit={this.onSubmit}>
                    <Forms.TextInput name="title"
                                value={recipe.title}
                                required={true}
                                label={<FormattedMessage id="recipe.title"/>}/>
                    <Forms.Textarea name="desc"
                                value={recipe.desc}
                                required={true}
                                label={<FormattedMessage id="recipe.desc"/>}/>

                    <Forms.Fieldset>
                        <Forms.Label><FormattedMessage id="recipe.ingredients"/></Forms.Label>
                        <ul className='modify-recipe__ingredient-list'>
                            {ingredients.map((ingredient, index)=>{
                                return (
                                    <li key={ingredient} className="ingredient-list__item">
                                        <Forms.Textarea name={`ingredient${index}`}
                                                        value={ingredient}
                                                        />
                                    </li>
                                )
                            })}
                            <li className="ingredient-list__item">
                                <Forms.Button onClick={this.handleAddIngredient}><FormattedMessage id="recipe.ingredients.add"/></Forms.Button>
                            </li>
                        </ul>
                    </Forms.Fieldset>
                    <Forms.Button type="submit"><FormattedMessage id="common.save"/></Forms.Button>
                </Form>
                }
            </div>
        );
    }
}

ModifyRecipe.propTypes = {
    match: PropTypes.object.isRequired
};

export default ModifyRecipe;
