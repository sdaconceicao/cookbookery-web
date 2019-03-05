import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {RecipeApi} from "cookbookery-shared";

import {Recipes} from './Recipes';
import {Preferences} from './Preferences';
import {ViewRecipe} from './ViewRecipe';
import {ModifyRecipe} from './ModifyRecipe';

export const Pages = ({location}) => {
    return (
        <Switch location={location}>
            <Route exact path='/' render={(props)=>(<Recipes {...props}
                                                             getList={RecipeApi.getList}/>)}/>
            <Route exact path='/preferences' component={Preferences}/>
            <Route exact path='/recipe/add' render={(props)=>(<ModifyRecipe {...props}
                                                                       get={RecipeApi.get}
                                                                       save={RecipeApi.create}/>)}/>
            <Route path='/recipe/:id/edit' render={(props)=>(<ModifyRecipe {...props}
                                                                           get={RecipeApi.get}
                                                                           save={RecipeApi.save}/>)}/>
            <Route path='/recipe/:id' render={(props)=>(<ViewRecipe {...props}
                                                                      get={RecipeApi.get}
                                                                      remove={RecipeApi.remove}/>)}/>
        </Switch>
    )
};

export default Pages;