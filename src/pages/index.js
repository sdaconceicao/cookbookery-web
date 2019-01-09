import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Recipes} from './Recipes';
import {Preferences} from './Preferences';
import {ViewRecipe} from './ViewRecipe';
import {ModifyRecipe} from './ModifyRecipe';

export const Pages = () => (
    <Switch>
        <Route exact path='/' component={Recipes}/>
        <Route exact path='/preferences' component={Preferences}/>
        <Route exact path='/recipe' component={ModifyRecipe}/>
        <Route path='/recipe/:id/edit' component={ModifyRecipe}/>
        <Route path='/recipe/:id' component={ViewRecipe}/>
    </Switch>
);

export default Pages;