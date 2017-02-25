import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import ClockContainer from './ClockContainer';
import GridFull from '../components/GridFull';
// import WeatherContainer from './WeatherContainer';
import SpotifyContainer from './SpotifyContainer';
import WebcamContainer from './WebcamContainer';
import TwitterContainer from './TwitterContainer';
import DateContainer from './DateContainer';
import YouTubeContainer from './YouTubeContainer';

import Widget from './Widget';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer" id="widget_container">
        <GridFull />
        <ClockContainer />
        <DateContainer />
        <YouTubeContainer />
      </div>
    );
  }
});

export default App;
