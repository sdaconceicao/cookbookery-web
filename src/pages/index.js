import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Recipes} from './Recipes';
import {Preferences} from './Preferences';
import {View} from './View';

export const Pages = () => (
    <Switch>
        <Route exact path='/' component={Recipes}/>
        <Route exact path='/preferences' component={Preferences}/>
        <Route path='/recipe/:id' component={View}/>
    </Switch>
);

export default Pages;