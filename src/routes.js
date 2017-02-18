import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './components/Login';
import Events from './components/Events';
import AccountInfo from './components/AccountInfo';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
       <Route path="/events" component={Events}/>
       <Route path="/user" component={AccountInfo}/>
    </Route>
);
