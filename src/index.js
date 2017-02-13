import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';
import { Router, browserHistory } from 'react-router'

import './styles/main.scss';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,document.getElementById('root')

);
