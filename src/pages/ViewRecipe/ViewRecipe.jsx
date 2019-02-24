import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import MdEdit from "react-icons/lib/md/edit";

import RecipeDetails from "Components/RecipeDetails";

import './ViewRecipe.scss';

export class ViewRecipe extends Component {

    state = {
        loading: true,
        error: false
    };

    componentDidMount(){
        this.props.match.params.id
            ? this.props.get(this.props.match.params.id).then(recipe=>{
                this.setState({recipe: recipe, loading: false});
            })
            : this.setState({loading: false, error: true});
    }

    render() {
        const {recipe} = this.state;
        return (
            <div className='view-recipe'>
                {recipe &&
                    <Fragment>
                        <Link className="btn primary view-recipe__edit" to={`/recipe/${recipe.id}/edit`}>
                            <MdEdit/> <FormattedMessage id="recipe.edit"/>
                        </Link>
                        <RecipeDetails {...recipe}/>
                    </Fragment>
                }
            </div>
        );
    }
}

ViewRecipe.propTypes = {
    match: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired
};

export default ViewRecipe;
