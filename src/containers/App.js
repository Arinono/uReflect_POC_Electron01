import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import TestWidget from '../components/TestWidget';
import ClockContainer from './ClockContainer';
import GridFull from '../components/GridFull';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer" id="widget_container">
        <GridFull />
        <ClockContainer />
        <ClockContainer />
      </div>
    );
  }
});

export default App;
