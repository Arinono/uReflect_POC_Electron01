import React from 'react';

import TestWidget from '../components/TestWidget';
import ClockContainer from './ClockContainer';
import Weather from '../components/Weather';
import SpotifyContainer from './SpotifyContainer';
import WebcamContainer from './WebcamContainer';
import DateContainer from './DateContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer">
        <ClockContainer />
        <Weather />
        <SpotifyContainer />
        <DateContainer />
      </div>
    );
  }
});

export default App;
