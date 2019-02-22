import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";

import {Form, ImagePicker, Input, RichTextEditor, Fieldset, Button} from "sad-shared-components";

import Ingredients from "Components/Ingredients";
import Steps from "Components/Steps"
import {getRecipe} from "Api";

import './ModifyRecipe.scss';

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
            : this.setState({loading: false, title: '', desc: '', ingredients:[], steps:[]});
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
        const {id, creating, image, loading, desc, title, ingredients, steps} = this.state;
        return (
            <div className='modify-recipe'>
                <h2>
                    {creating
                        ? <FormattedMessage id='recipe.create'/>
                        : <FormattedMessage id='recipe.edit'/>
                    }
                </h2>
                {!loading &&
                <Form onSubmit={this.onSubmit}>
                    <ImagePicker name="image"
                                      id="image"
                                      value={image}
                                      buttonClassName={'primary'}
                                      wrapper={true}
                                      label={<FormattedMessage id="recipe.image"/>}/>
                    <Input name="title"
                                value={title}
                                required={true}
                                wrapper={true}
                                label={<FormattedMessage id="recipe.title"/>}/>
                    <RichTextEditor name="desc"
                                value={desc}
                                required={true}
                                wrapper={true}
                                label={<FormattedMessage id="recipe.desc"/>}/>
                    <Fieldset legend={<FormattedMessage id="recipe.ingredients"/>} required={true}>
                        <Ingredients ingredients={ingredients}
                                editable={true}
                                handleAddIngredient={this.handleAddIngredient}
                                wrapper={true}
                                handleRemoveIngredient={this.handleRemoveIngredient} />
                    </Fieldset>
                    <Fieldset legend={<FormattedMessage id="recipe.steps"/>} required={true}>
                        <Steps steps={steps}
                                editable={true}
                                wrapper={true}
                                handleAddStep={this.handleAddStep}
                                handleRemoveStep={this.handleRemoveStep}/>
                    </Fieldset>
                    <Button type="submit"><FormattedMessage id="common.save"/></Button>
                    <Link to={`/recipe/${id}`}><FormattedMessage id="common.cancel"/></Link>
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
