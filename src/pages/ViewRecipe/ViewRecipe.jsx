import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MdEdit from "react-icons/lib/md/edit";

import {RecipeDetails} from "Components/Recipe";
import {getRecipe} from "Components/Recipe/Recipe.util";

export class ViewRecipe extends Component {

    state = {
        loading: true,
        error: false
    };

    componentDidMount(){
        this.props.match.params.id
            ? getRecipe(this.props.match.params.id).then(recipe=>{
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
                    <RecipeDetails {...recipe}/>
                    <Link to={`/recipe/${recipe.id}/edit`}><MdEdit/></Link>
                </Fragment>
                }
            </div>
        );
    }
}

ViewRecipe.propTypes = {
    match: PropTypes.object.isRequired
};

export default ViewRecipe;
