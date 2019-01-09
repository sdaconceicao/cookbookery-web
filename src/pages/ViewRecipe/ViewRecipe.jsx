import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {Link} from 'react-router-dom';
import MdEdit from "react-icons/lib/md/edit";

import {RecipeDetails} from "Components/Recipe";


export class ViewRecipe extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        axios.get(`/recipes/${this.props.match.params.id}`)
            .then(response=>{
                this.setState({loading: false, recipe: response.data});
            }).catch(error=>{
            console.error("ERROR in retrieving recipe", error);
        })
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
