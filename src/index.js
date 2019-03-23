import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "@babel/polyfill";
import './styles/index.scss'; //Need to load bootstrap styles before page/component styles


import {apiConfig} from 'cookbookery-shared';
import {App} from './app';

//MOCKS_ENABLED is set by params passed into build
apiConfig(axios, process.env.REACT_APP_BASE_URL, MOCKS_ENABLED);  // eslint-disable-line no-undef
ReactDOM.render(<App/>, document.getElementById('root'));
