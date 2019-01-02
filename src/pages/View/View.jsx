import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import {RecipeDetails} from "Components/Recipe";

export class View extends Component {

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
            <div className='view'>
                {recipe && <RecipeDetails {...recipe}/>}
            </div>
        );
    }
}

View.propTypes = {
    match: PropTypes.object.isRequired
};

export default View;
