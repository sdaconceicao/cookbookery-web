import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {FormattedMessage} from 'react-intl';

import {Form, Forms} from "sad-shared-components";

import Ingredients from "Components/Ingredients";
import Steps from "Components/Steps"
import {getRecipe} from "Components/Recipe/Recipe.util";

export class ModifyRecipe extends Component {

    state = {
        loading: true,
        saving: false,
        creating: !this.props.match.params.id
    };

    componentDidMount(){
        this.props.match.params.id
            ? getRecipe(this.props.match.params.id).then(recipe=>{
                this.setState({...recipe, loading: false});
            })
            : this.setState({loading: false, recipe: {}});
    }

    onSubmit = (data) => {
        this.setState({saving: true});
        this.state.creating
            ? axios.post(`/recipes`, data).then(() => {
                this.setState({saving: false});
            })
            : axios.put(`/recipes/${this.props.match.params.id}`, data).then(() => {
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
                    <Forms.Fieldset legend={<FormattedMessage id="recipe.ingredients"/>} required={true}>
                        <Ingredients ingredients={ingredients}
                            editable={true}
                            handleAddIngredient={this.handleAddIngredient}
                            handleRemoveIngredient={this.handleRemoveIngredient} />
                    </Forms.Fieldset>
                    <Forms.Fieldset legend={<FormattedMessage id="recipe.steps"/>} required={true}>
                        <Steps steps={steps}
                            editable={true}
                            handleAddStep={this.handleAddStep}
                            handleRemoveStep={this.handleRemoveStep}/>
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
