import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import axios from 'axios';

import {RecipeList} from 'Components/Recipe';
import RecipeCard from "../../components/Recipe/RecipeCard";

import "./Recipes.scss";

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

    handleClick = (id) =>{
        this.props.history.push(`/recipe/${id}`)
    };

    render() {
        const {loading, recipes} = this.state;
        return (
            <div className="recipes">
                <h1><FormattedMessage id='recipes.title'/></h1>
                {!loading &&
                <RecipeList recipes={recipes} render={(recipe)=>(
                    <RecipeCard title={recipe.title} desc={recipe.desc} onClick={() => this.handleClick(recipe.id)}/>
                )}/>
                }
            </div>
        );
    }
}

export default Recipes;
