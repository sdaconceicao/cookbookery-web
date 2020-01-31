import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";
import FaPlus from "react-icons/lib/fa/plus-square";

import {Spinner, Alert} from 'sad-shared-components';

import RecipeList from 'Components/RecipeList';
import RecipeCard from "Components/RecipeCard";
import Searchbar from 'Components/Searchbar';
import HeaderNav from "Components/HeaderNav/HeaderNav";
import Filters from 'Components/Filters';
import OrderBy from 'Components/OrderBy';

import "./Recipes.scss";

export class Recipes extends Component {

    state = {
        loading: true,
        searchQuery: '',
        orderBy: 'title',
        filters: null,
        error: null
    };

    componentDidMount(){
        this.props.getList()
            .then(response=>{
            this.setState({loading: false, recipes: response.data.recipes});
        }).catch(error=>{
            console.error("ERROR in retrieving recipes", error);
            this.setState({loading: false, error: <FormattedMessage id="recipes.unavailable"/>});
        })
    }

    handleClick = (id) =>{
        this.props.history.push(`/recipe/${id}`)
    };

    handleSearch = (searchQuery) =>{
        this.setState({searchQuery}, this.getList);
    };

    handleFilters = (filters) =>{
        this.setState({filters}, this.getList);
    };

    handleOrderBy = (e) =>{
        this.setState({orderBy: e.value}, this.getList);
    };

    getList = () =>{
        const {searchQuery, orderBy, filters} = this.state;
        this.setState({error: false});
        this.props.getList({searchQuery, orderBy, ...filters}).then(response=>{
            this.setState({loading: false, recipes: response.data.recipes});
        }).catch(error=>{
            console.error("ERROR in retrieving recipes", error);
            this.setState({loading: false, error: <FormattedMessage id="recipes.unavailable"/>});
        })
    };

    render() {
        const {loading, recipes, orderBy, error} = this.state;
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
                        <header className="recipes__list-header">
                            <h4 className="recipes__found">
                            {recipes && recipes.length > 0
                                ? <FormattedMessage id="recipes.found" values={{values: recipes.length}}/>
                                : null
                            }
                            </h4>
                            <div className="recipes__orderBy">
                                <OrderBy value={orderBy} onChange={this.handleOrderBy}/>
                            </div>
                        </header>
                        <div className="recipes__list-content d-flex ">
                        {!loading
                            ? error 
                                ? <Alert type="error" className="recipes__message">{error}</Alert>
                                : <RecipeList recipes={recipes} render={(recipe) => (
                                    <RecipeCard title={recipe.title} desc={recipe.desc} image={recipe.image}
                                            onClick={() => this.handleClick(recipe.id)}/>
                            )}/>
                            : <Spinner size="xl"/>
                        }
                        </div>
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
