import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'Styles/index.scss';

import {apiConfig} from './api';
import {App} from './app';

//MOCKS_ENABLED is set by params passed into build
apiConfig(axios, MOCKS_ENABLED);  // eslint-disable-line no-undef
ReactDOM.render(<App/>, document.getElementById('root'));
