import React from 'react';

import ClockContainer from '../containers/ClockContainer';
import WeatherContainer from '../containers/WeatherContainer';
import DateContainer from '../containers/DateContainer';
import SpotifyContainer from '../containers/SpotifyContainer';

const styles = {
  none: {
    display: 'none',
  },
  visible: {
    display: 'block',
  }
};

var ChildProfile = React.createClass({
  render: function() {
    return (
      <div style={this.props.state == "hidden" ? styles.none : styles.visible}>
        <WeatherContainer />
        <DateContainer />
        <ClockContainer />
        <SpotifyContainer />
      </div>
    );
  },
});

export default ChildProfile;
