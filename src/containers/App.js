import React from 'react';

import TestWidget from '../components/TestWidget';
import ClockContainer from './ClockContainer';
import WeatherContainer from './WeatherContainer';
import SpotifyContainer from './SpotifyContainer';
import WebcamContainer from './WebcamContainer';
import DateContainer from './DateContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer">
        <ClockContainer />
        <WeatherContainer />
        <SpotifyContainer />
        <DateContainer />
      </div>
    );
  }
});

export default App;
