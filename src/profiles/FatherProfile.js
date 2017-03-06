import React from 'react';

import ClockContainer from '../containers/ClockContainer';
//import WeatherContainer from '../containers/WeatherContainer';
import TwitterContainer from '../containers/TwitterContainer';
import DateContainer from '../containers/DateContainer';
//import RssContainer from '../containers/RssContainer';

const styles = {
  none: {
    display: 'none',
  },
  visible: {
    display: 'block',
  }
};

var FatherProfile = React.createClass({

  render: function() {
    return (
      <div style={this.props.state == "hidden" ? styles.none : styles.visible}>
        <DateContainer />
        <TwitterContainer />
        <ClockContainer />
      </div>
      );
  },

});

export default FatherProfile;
