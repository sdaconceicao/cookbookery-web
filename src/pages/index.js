import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Recipes} from './Recipes';
import {Preferences} from './Preferences';
import {ViewRecipe} from './ViewRecipe';
import {ModifyRecipe} from './ModifyRecipe';

import {Recipe} from "Api";

export const Pages = ({location}) => {

    return (
        <Switch location={location}>
            <Route exact path='/' render={(props)=>(<Recipes {...props}
                                                             getList={Recipe.getList}/>)}/>
            <Route exact path='/preferences' component={Preferences}/>
            <Route exact path='/recipe/add' render={(props)=>(<ModifyRecipe {...props}
                                                                       get={Recipe.get}
                                                                       save={Recipe.create}/>)}/>
            <Route path='/recipe/:id/edit' render={(props)=>(<ModifyRecipe {...props}
                                                                           get={Recipe.get}
                                                                           save={Recipe.save}/>)}/>
            <Route path='/recipe/:id' render={(props)=>(<ViewRecipe {...props}
                                                                      get={Recipe.get}/>)}/>
        </Switch>
    )
};

export default Pages;