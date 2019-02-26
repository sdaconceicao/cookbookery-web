import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";

import {Form, ImagePicker, Input, Duration, RichTextEditor, Tags, Fieldset, Button} from "sad-shared-components";

import Ingredients from "Components/Ingredients";
import Steps from "Components/Steps"
import HeaderNav from "Components/HeaderNav";

import './ModifyRecipe.scss';

export class ModifyRecipe extends Component {

    state = {
        loading: true,
        saving: false,
        creating: !this.props.match.params.id
    };

    componentDidMount(){
        this.props.match.params.id
            ? this.props.get(this.props.match.params.id).then(recipe=>{
                this.setState({...recipe, loading: false});
            })
            : this.setState({loading: false, title: '', desc: '', ingredients:[''], steps:['']});
    }

    onSubmit = (data) => {
        const {save, history} = this.props;
        this.setState({saving: true});
        save(data).then((recipe) => {
            this.setState({saving: false});
            history.push(`/recipe/${recipe.id}`)
        });
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

    handleBack = () =>{
        this.props.history.goBack();
    };

    render() {
        const {id, creating, image, loading, prepTime, cookTime, desc, title, tags, ingredients, steps} = this.state;
        return (
            <div className='modify-recipe'>
                <Form onSubmit={this.onSubmit}>
                    <HeaderNav className="modify-recipe__header">
                        <h2 className="modify-recipe__title col-9">
                            {creating
                                ? <FormattedMessage id='recipe.create'/>
                                : <FormattedMessage id='recipe.edit'/>
                            }
                        </h2>
                        <div className="modify-recipe__controls col-3">
                            {creating && <Button className="secondary" onClick={this.handleBack}><FormattedMessage id="common.cancel"/></Button>}
                            {!creating && <Link className="btn secondary" to={`/recipe/${id}`}><FormattedMessage id="common.cancel"/></Link>}
                            <Button type="submit" className="primary"><FormattedMessage id="common.save"/></Button>
                        </div>
                    </HeaderNav>
                    <div className="modify-recipe__content">
                        {!loading && <Fragment>
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
                        <Tags name="tags"
                              value={tags}
                              editable={true}
                              wrapper={true}
                              buttonClassName="primary"
                              label={<FormattedMessage id="recipe.tags"/>}/>
                        <Duration id="prepTime" name="prepTime"
                               value={prepTime}
                               required={true}
                               wrapper={true}
                               label={<FormattedMessage id="recipe.prepTime"/>}/>
                        <Duration id="cookTime" name="cookTime"
                               value={cookTime}
                               required={true}
                               wrapper={true}
                               label={<FormattedMessage id="recipe.cookTime"/>}/>

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
                        </Fragment>}
                    </div>
                </Form>
            </div>
        );
    }
}

ModifyRecipe.propTypes = {
    match: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired
};

export default ModifyRecipe;
