import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import RecipeList from 'Components/RecipeList';
import RecipeCard from "Components/RecipeCard";
import Searchbar from 'Components/Searchbar';

import "./Recipes.scss";

export class Recipes extends Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.props.getList()
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
                <Searchbar/>
                <div className="recipes__content">
                    <h1><FormattedMessage id='recipes.title'/></h1>
                    {!loading &&
                        <RecipeList recipes={recipes} render={(recipe) => (
                            <RecipeCard title={recipe.title} desc={recipe.desc} image={recipe.image}
                                        onClick={() => this.handleClick(recipe.id)}/>
                        )}/>
                    }
                </div>
            </div>
        );
    }
}

Recipes.propTypes = {
    getList: PropTypes.func.isRequired
};


export default Recipes;
