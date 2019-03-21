import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";

import {Spinner, NavigationGuard, Form, ImagePicker, Input, Duration, RichTextEditor, Tags, Fieldset, Button} from "sad-shared-components";

import Ingredients from "Components/Ingredients";
import Steps from "Components/Steps"
import HeaderNav from "Components/HeaderNav";

import './ModifyRecipe.scss';

export class ModifyRecipe extends Component {

    state = {
        dirty: false,
        loading: true,
        saving: false,
        error: false,
        creating: !this.props.match.params.id,
        form: React.createRef()
    };

    componentDidMount(){
        this.props.match.params.id
            ? this.props.get(this.props.match.params.id).then(recipe=>{
                this.setState({...recipe, loading: false});
            })
            : this.setState({
                loading: false,
                title: '',
                desc: '',
                ingredients:[''],
                steps:[''],
                tags: [],
                prepTime: 0,
                cookTime: 0
            });
    }

    handleSubmit = (e) =>{
        this.state.form.current.onSubmit(e);
    };

    onSubmit = (data) => {
        const {save, history} = this.props;
        this.setState({saving: true});
        save(data).then((response) => {
            this.setState({dirty: false}, ()=>{
                history.push(`/recipe/${response.data.id}`)
            });
        }).catch(error=>{
            this.setState({error});
        }).finally(()=>{
            this.setState({saving: false});
        });
    };

    onFormChange = (e) =>{
        this.setState({dirty: e.dirty});
    };

    handleAddIngredient = () =>{
        const {ingredients} = this.state;
        ingredients.push({id: `temp-${Math.floor(Math.random() * 1000+1)}`, desc: ''});
        this.setState({ingredients});
    };

    handleAddStep = () =>{
        const {steps} = this.state;
        steps.push({id: `temp-${Math.floor(Math.random() * 1000+1)}`, desc: ''});
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
        const {id, form, creating, image, loading, prepTime, cookTime, servingSize,
            desc, title, tags, ingredients, steps, dirty} = this.state;
        return (
            <div className='modify-recipe'>
                <HeaderNav className="modify-recipe__header">
                    <h2 className="header-nav__title col-md-9 col-6">
                        {creating
                            ? <FormattedMessage id='recipe.create'/>
                            : <FormattedMessage id='recipe.edit'/>
                        }
                    </h2>
                    <div className="header-nav__controls col-md-3 col-6">
                        {creating && <Button className="tertiary" onClick={this.handleBack}><FormattedMessage id="common.cancel"/></Button>}
                        {!creating && <Link className="btn tertiary" to={`/recipe/${id}`}><FormattedMessage id="common.cancel"/></Link>}
                        <Button type="button" onClick={this.handleSubmit} className="primary"><FormattedMessage id="common.save"/></Button>
                    </div>
                </HeaderNav>
                <Form className="modify-recipe__content row"
                      ref={form}
                      onChange={this.onFormChange}
                      onSubmit={this.onSubmit}>
                    {!loading && <Fragment>
                    <div className="col-12 col-lg-4">
                        <Input type="hidden" name="id" value={id}/>
                        <Input name="title"
                               value={title}
                               required={true}
                               label={<FormattedMessage id="recipe.title"/>}/>
                        <ImagePicker name="image"
                                     id="image"
                                     value={image}
                                     buttonClassName={'primary'}
                                     label={<FormattedMessage id="recipe.image"/>}/>
                        <Duration id="prepTime" name="prepTime"
                                  value={prepTime}
                                  required={true}
                                  label={<FormattedMessage id="recipe.prepTime"/>}/>
                        <Duration id="cookTime" name="cookTime"
                                  value={cookTime}
                                  required={true}
                                  label={<FormattedMessage id="recipe.cookTime"/>}/>
                        <Input name="servingSize"
                               value={servingSize}
                               required={true}
                               label={<FormattedMessage id="recipe.servingSize"/>}/>
                        <Tags name="tags"
                              value={tags || []}
                              editable={true}
                              buttonClassName="primary"
                              label={<FormattedMessage id="recipe.tags"/>}/>
                    </div>
                    <div className="col-12 col-lg-8">

                        <RichTextEditor name="desc"
                                        value={desc}
                                        required={true}
                                        label={<FormattedMessage id="recipe.desc"/>}/>
                        <Fieldset legend={<FormattedMessage id="recipe.ingredients"/>} required={true}>
                            <Ingredients ingredients={ingredients}
                                         editable={true}
                                         handleAddIngredient={this.handleAddIngredient}
                                         handleRemoveIngredient={this.handleRemoveIngredient} />
                        </Fieldset>
                        <Fieldset legend={<FormattedMessage id="recipe.steps"/>} required={true}>
                            <Steps steps={steps}
                                   editable={true}
                                   handleAddStep={this.handleAddStep}
                                   handleRemoveStep={this.handleRemoveStep}/>
                        </Fieldset>
                    </div>
                    </Fragment>}
                    <NavigationGuard
                        title={<FormattedMessage id="recipe.navigate.title"/>}
                        message={<FormattedMessage id="recipe.navigate.message"/>}
                        when={dirty}
                        history={this.props.history}/>

                    {loading && <Spinner size='xl'/>}
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
