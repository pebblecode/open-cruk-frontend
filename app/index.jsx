/* @flow */

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';


import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './stores/configureStore';
import App from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <App getState={store.getState}/>
  </Provider>,
  document.getElementById('app'));
