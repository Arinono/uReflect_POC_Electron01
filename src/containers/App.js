import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import ClockContainer from './ClockContainer';
import GridFull from '../components/GridFull';
import WeatherContainer from './WeatherContainer';
import SpotifyContainer from './SpotifyContainer';
import WebcamContainer from './WebcamContainer';
import DateContainer from './DateContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer" id="widget_container">
        <GridFull />
        <ClockContainer />
        <WeatherContainer />
        <DateContainer />
        <SpotifyContainer />
        <WebcamContainer />
      </div>
    );
  }
});

export default App;
