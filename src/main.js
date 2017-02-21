// jQuery
var $ = require("jquery");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './router';

injectTapEventPlugin();

$(document).ready(function() {
  ReactDOM.render((
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  ), document.getElementById('app'));
});
