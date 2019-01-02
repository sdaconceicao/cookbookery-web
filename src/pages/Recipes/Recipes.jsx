import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import axios from 'axios';

import {RecipeCard} from 'Components/Recipe';

export class Recipes extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        axios.get('/recipes')
            .then(response=>{
            this.setState({loading: false, recipes: response.data.recipes});
        }).catch(error=>{
            console.error("ERROR in retrieving recipes", error);
        })
    }

    gotoRecipe = (id) =>{
        this.props.history.push(`/recipe/${id}`)
    };

    render() {
        const {recipes} = this.state;
        return (
            <div className="recipes">
                <h1><FormattedMessage id='recipes.title'/></h1>
                <ul className="recipes-list">
                {recipes && recipes.map(recipe=>{
                    return <li key={recipe.id}
                                   className="recipe-list-item"
                                   onClick={()=>this.gotoRecipe(recipe.id)}>
                                <RecipeCard {...recipe}/>
                            </li>
                })}
                </ul>
            </div>
        );
    }
}

export default Recipes;
