import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import MdEdit from "react-icons/lib/md/edit";
import MdDelete from "react-icons/lib/md/delete";

import {Button, ModalConfirm} from "sad-shared-components";

import RecipeDetails from "Components/RecipeDetails";

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

    render() {
        const {recipe, removeConfirm, resolve} = this.state;
        return (
            <div className='view-recipe'>
                {recipe &&
                    <Fragment>
                        <span className="view-recipe__controls btn-group">
                            <Link className="btn primary view-recipe__edit" to={`/recipe/${recipe.id}/edit`}>
                                <MdEdit/>
                            </Link>
                            <Button className="primary view-recipe__remove" onClick={this.handleRemoveConfirm}>
                                <MdDelete/>
                            </Button>
                        </span>
                        <RecipeDetails {...recipe}/>
                    </Fragment>
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
