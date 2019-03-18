import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import MdEdit from "react-icons/lib/md/edit";
import MdDelete from "react-icons/lib/md/delete";

import {BackgroundImage, Button, DurationView, ModalConfirm, TagsList, Spinner} from "sad-shared-components";

import Ingredients from "Components/Ingredients";
import Steps from "Components/Steps";

import './ViewRecipe.scss';

export class ViewRecipe extends Component {

    state = {
        loading: true,
        error: false,
        removeConfirm: false
    };

    componentDidMount(){
        this.props.match.params.id
            ? this.props.get(this.props.match.params.id).then(recipe=>{
                this.setState({recipe: recipe, loading: false});
            })
            : this.setState({loading: false, error: true});
    }

    handleRemoveConfirm = () =>{
        return new Promise(resolve => {
            this.setState({removeConfirm: true, resolve});
        }).then(response=>{
            response && this.props.remove(this.props.match.params.id).then(()=>{
                this.props.history.push('/');
            });
        }).finally(()=>{
            this.setState({removeConfirm: false});
        });

    };

    renderRecipe = ({id, title, desc, image, ingredients, servingSize, prepTime, cookTime, tags, steps}) => (
        <Fragment>
            <div className="col-sm-4 col-12 image-col">
                <span className="view-recipe__controls btn-group">
                    <Link className="btn primary view-recipe__edit" to={`/recipe/${id}/edit`}>
                        <MdEdit/>
                    </Link>
                    <Button className="primary view-recipe__remove" onClick={this.handleRemoveConfirm}>
                        <MdDelete/>
                    </Button>
                </span>
                <BackgroundImage src={image} className="recipe__image"/>
                <TagsList tags={tags}/>
                <div className="d-none d-sm-block"><FormattedMessage id={'recipe.servingSize'}/><div>{servingSize}</div></div>
                <div className="d-none d-sm-block"><FormattedMessage id={'recipe.prepTime'}/> <DurationView value={prepTime}/></div>
                <div className="d-none d-sm-block"><FormattedMessage id={'recipe.cookTime'}/> <DurationView value={cookTime}/></div>
            </div>
            <div className="col-sm-8 col-12">
                <h2 className="recipe__title">{title}</h2>
                <div className="recipe__description" dangerouslySetInnerHTML={{__html:desc}}></div>
                <div className="d-block d-sm-none"><FormattedMessage id={'recipe.servingSize'}/><div>{servingSize}</div></div>
                <div className="d-block d-sm-none"><FormattedMessage id={'recipe.prepTime'}/> <DurationView value={prepTime}/></div>
                <div className="d-block d-sm-none"><FormattedMessage id={'recipe.cookTime'}/> <DurationView value={cookTime}/></div>
                <h3><FormattedMessage id='recipe.ingredients'/></h3>
                <Ingredients ingredients={ingredients}/>
                <h3><FormattedMessage id='recipe.steps'/></h3>
                <Steps steps={steps}/>
            </div>
        </Fragment>
    );

    render() {
        const {recipe, removeConfirm, resolve} = this.state;
        return (
            <div className='view-recipe row'>
                {recipe ?
                    this.renderRecipe(recipe) : <Spinner/>
                }
                {removeConfirm &&
                    <ModalConfirm title={<FormattedMessage id={'recipe.remove.title'}/>} resolve={resolve}>
                        <div className="p-3"><FormattedMessage id={'recipe.remove.desc'}/></div>
                    </ModalConfirm>
                }
            </div>
        );
    }
}

ViewRecipe.propTypes = {
    match: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ViewRecipe;
