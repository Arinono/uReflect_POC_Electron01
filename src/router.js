import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import MainActivityContainer from './containers/MainActivityContainer';

var routes = (
    <Route path="/" component={MainActivityContainer}>
    </Route>
);

export default routes;
