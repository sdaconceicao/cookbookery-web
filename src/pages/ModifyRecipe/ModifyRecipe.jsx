import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {FormattedMessage} from 'react-intl';
import {Form, Forms, arrayUtils} from "sad-shared-components";

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
                    response.data.ingredients = arrayUtils.addIdsToArrayElements(response.data.ingredients);
                    response.data.steps = arrayUtils.addIdsToArrayElements(response.data.steps);
                    this.setState({...response.data, loading: false});
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
        ingredients.push({key: Math.floor(Math.random() * 1000+1), value: ''});
        this.setState({ingredients});
    };
    handleAddStep = () =>{
        const {steps} = this.state;
        steps.push({key: Math.floor(Math.random() * 1000+1), value: ''});
        this.setState({steps});
    };

    handleRemoveIngredient = (index) =>{
        const {ingredients} = this.state,
            newIngredients = [...ingredients.slice(0, index), ...ingredients.slice(index+1)];
        this.setState({ingredients: newIngredients });
    };

    handleRemoveStep = (index) =>{
        const {steps} = this.state,
            newSteps = [...steps.slice(0, index), ...steps.slice(index+1)];
        this.setState({steps: newSteps });
    };

    render() {
        const {creating, loading, desc, title, ingredients, steps} = this.state;
        return (
            <div className='modify-recipe col-12'>
                <h2>
                    {creating
                        ? <FormattedMessage id='recipe.create'/>
                        : <FormattedMessage id='recipe.edit'/>
                    }
                </h2>
                {!loading &&
                <Form onSubmit={this.onSubmit}>
                    <Forms.TextInput name="title"
                                value={title}
                                required={true}
                                label={<FormattedMessage id="recipe.title"/>}/>
                    <Forms.Textarea name="desc"
                                value={desc}
                                required={true}
                                label={<FormattedMessage id="recipe.desc"/>}/>

                    <Forms.Label><FormattedMessage id="recipe.ingredients"/></Forms.Label>
                    <Forms.Fieldset>
                            <ul>
                            {ingredients.map((ingredient, index)=>{
                                return (
                                    <li key={ingredient.key}>
                                    <Forms.TextInput name="ingredient" index={index}
                                                     value={ingredient.value}/>
                                        <button type="button" onClick={()=>this.handleRemoveIngredient(index)}>X</button>
                                    </li>
                                )
                            })}
                            </ul>
                        <button type="button" onClick={this.handleAddIngredient}><FormattedMessage id="recipe.ingredients.add"/></button>
                    </Forms.Fieldset>
                    <Forms.Fieldset>
                        <Forms.Label><FormattedMessage id="recipe.steps"/></Forms.Label>
                        <ol className='modify-recipe__steps-list'>
                            {steps.map((step, index)=>{
                                return (
                                    <li key={step.key} className="step-list__item">
                                        <Forms.Textarea name="step" index={index}
                                                        value={step.value}
                                        />
                                        <button type="button" onClick={()=>this.handleRemoveStep(index)}>X</button>
                                    </li>
                                )
                            })}
                        </ol>

                        <Forms.Button onClick={this.handleAddStep}><FormattedMessage id="recipe.steps.add"/></Forms.Button>
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
