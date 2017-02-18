import React from 'react';

import ClockFrame from '../components/ClockFrame';
import ClockDigits from '../components/ClockDigits';
import ClockHands from '../components/ClockHands';

var ClockContainer = React.createClass({
  render: function() {
    return (
      <div className="clock widget">
        <ClockFrame />
        <ClockDigits />
        <ClockHands />
      </div>
    );
  }
});

export default ClockContainer;
