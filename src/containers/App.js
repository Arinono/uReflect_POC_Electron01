import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import ClockContainer from './ClockContainer';
import GridFull from '../components/GridFull';
import WeatherContainer from './WeatherContainer';
import SpotifyContainer from './SpotifyContainer';
import WebcamContainer from './WebcamContainer';
import DateContainer from './DateContainer';
import YouTubeContainer from './YouTubeContainer';

import Widget from './Widget';

var App = React.createClass({
  render: function() {
    var render =
    <div>coucou</div>;

    var options = {
      size: {
        width: 1,
        height: 1
      },
      pos: {
        x: 1,
        y: 1
      },
      behaviour: {
        resizable: true,
        draggable: true,
        debug: true
      },
      resizeOpt: {
        horizontal: true,
        vertical: true
      }
    }

    return (
      <div className="widgetContainer" id="widget_container">
        <GridFull />
        <Widget options={options} render={render} />
      </div>
    );
  }
});

export default App;
