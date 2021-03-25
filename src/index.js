import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import { createStore } from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from './redux/rootReducer'

import './index.css'

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
