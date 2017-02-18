import React from 'react';

import ClockFrame from '../components/ClockFrame';
import ClockDigits from '../components/ClockDigits';
import ClockHands from '../components/ClockHands';

var ClockContainer = React.createClass({
  render: function() {
    var style = {
      transform: 'translate(0px, 0px)'
    }
    return (
      <div className="widget square clock" style={style}>
        <ClockFrame />
        <ClockDigits />
        <ClockHands />
      </div>
    );
  }
});

export default ClockContainer;
