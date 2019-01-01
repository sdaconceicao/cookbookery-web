import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Recipes} from './Recipes';
import {Preferences} from './Preferences';

export const Pages = () => (
    <Switch>
        <Route exact path='/' component={Recipes}/>
        <Route exact path='/preferences' component={Preferences}/>
    </Switch>
);

export default Pages;