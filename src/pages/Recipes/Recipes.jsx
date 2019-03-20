import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";
import FaPlus from "react-icons/lib/fa/plus-square";

import {Spinner} from 'sad-shared-components';

import RecipeList from 'Components/RecipeList';
import RecipeCard from "Components/RecipeCard";
import Searchbar from 'Components/Searchbar';
import HeaderNav from "Components/HeaderNav/HeaderNav";
import Filters from 'Components/Filters';

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

    handleSearch = (searchQuery) =>{
        this.props.getList(`?searchQuery=${searchQuery}`)
            .then(response=>{
                this.setState({loading: false, recipes: response.data.recipes});
            }).catch(error=>{
                console.error("ERROR in retrieving recipes", error);
            })
    };

    handleFilters = (filters) =>{

    };

    render() {
        const {loading, recipes} = this.state;
        return (
            <div className="recipes">
                <HeaderNav>
                    <h2 className="recipes__title col-md-8 col-6">
                        <Link className="btn primary" to="/recipe/add"><FaPlus/></Link>
                        <FormattedMessage id='recipes.title'/>
                    </h2>
                    <Searchbar className="recipes__search col-md-4 col-6"
                               onSearch={this.handleSearch}/>
                </HeaderNav>
                <div className="recipes__content row">
                    <aside className="recipes__filters col-md-3 d-none d-md-block">
                        <header className="recipes__filters-header">
                            <h3><FormattedMessage id="recipes.filters"/></h3>
                        </header>
                        <Filters handleFilters={this.handleFilters}/>
                    </aside>
                    <div className="recipes__list col-md-9 col-12">
                    {!loading
                        ? <RecipeList recipes={recipes} render={(recipe) => (
                            <RecipeCard title={recipe.title} desc={recipe.desc} image={recipe.image}
                                        onClick={() => this.handleClick(recipe.id)}/>
                        )}/>
                        : <Spinner size="xl"/>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

Recipes.propTypes = {
    getList: PropTypes.func.isRequired
};


export default Recipes;
