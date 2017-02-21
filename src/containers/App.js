import React from 'react';

import TestWidget from '../components/TestWidget';
import ClockContainer from './ClockContainer';
import Weather from '../components/Weather';
import SpotifyContainer from './SpotifyContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer">
        <SpotifyContainer />
      </div>
    );
  }
});

export default App;
