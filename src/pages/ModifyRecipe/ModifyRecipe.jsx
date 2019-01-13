import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {FormattedMessage} from 'react-intl';
import {Form, Forms} from "sad-shared-components";

export class ModifyRecipe extends Component {

    state = {
        loading: true,
        saving: false,
        creating: !this.props.match.params.id
    };

    componentDidMount(){
        this.props.match.params.id
            ? axios.get(`/recipes/${this.props.match.params.id}`)
                .then(response=>{
                    this.setState({loading: false, recipe: response.data});
                }).catch(error=>{
                console.error("ERROR in retrieving recipe", error);
            })
            : this.setState({loading: false, recipe: {}});
    }

    onSubmit = (e) => {
        this.setState({saving: true});
        this.state.creating
            ? axios.post(`/recipes`, e.data).then(() => {
                this.setState({saving: false});
            })
            : axios.put(`/recipes/${this.props.match.params.id}`, e.data).then(() => {
                this.setState({saving: false});
            })
    };

    render() {
        const {recipe, creating} = this.state;
        return (
            <div className='modify-recipe'>
                <h2>
                    {creating
                        ? <FormattedMessage id='recipe.create'/>
                        : <FormattedMessage id='recipe.edit'/>
                    }
                </h2>
                {recipe &&
                <Form onSubmit={this.onSubmit}>
                    <Forms.TextInput name="title"
                                value={recipe.title}
                                required={true}
                                label={<FormattedMessage id="recipe.title"/>}/>
                    <Forms.Textarea name="desc"
                                value={recipe.desc}
                                required={true}
                                label={<FormattedMessage id="recipe.desc"/>}/>
                    <Forms.Button type="submit"><FormattedMessage id="common.save"/></Forms.Button>
                </Form>
                }
            </div>
        );
    }
}

ModifyRecipe.propTypes = {
    match: PropTypes.object.isRequired
};

export default ModifyRecipe;
