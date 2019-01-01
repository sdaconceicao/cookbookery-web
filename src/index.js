import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import {apiConfig} from './api';
import * as enMessage from './translations/en.json';
import {App} from './components/App';
import './styles/index.scss';

//MOCKS_ENABLED is set by params passed into build
apiConfig(axios, MOCKS_ENABLED);  // eslint-disable-line no-undef
ReactDOM.render(
    <IntlProvider locale="en" messages={enMessage}>
       <Router><App/></Router>
    </IntlProvider>,
    document.getElementById('root')
);
