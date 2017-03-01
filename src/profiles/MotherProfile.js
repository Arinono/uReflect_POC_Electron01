import React from 'react';

import ClockContainer from '../containers/ClockContainer';
//import WeatherContainer from '../containers/WeatherContainer';
//import TwitterContainer from '../containers/TwitterContainer';
import DateContainer from '../containers/DateContainer';
import YouTubeContainer from '../containers/YouTubeContainer';

const styles = {
  none: {
    display: 'none',
  },
  visible: {
    display: 'block',
  }
};

var MotherProfile = React.createClass({
  render: function() {
    return (
      <div style={this.props.state == "hidden" ? styles.none : styles.visible}>
        <YouTubeContainer />
        <DateContainer />
        <ClockContainer />
      </div>
    );
  },
});

export default MotherProfile;
