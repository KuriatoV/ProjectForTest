import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import routes from '../routes';
import { Router, browserHistory } from 'react-router';

 /* Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
    
      <Provider store={store}>
        <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
};
