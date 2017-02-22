import React from 'react';

import ClockFrame from '../components/ClockFrame';
import ClockDigits from '../components/ClockDigits';
import ClockHands from '../components/ClockHands';
import Widget from './Widget';

var ClockContainer = React.createClass({
  render: function() {
    var render =
    <div className="clock">
      <ClockFrame />
      <ClockDigits />
      <ClockHands />
    </div>;

    return (
      <Widget width="1" height="1" posX="12" posY="1" debug="false" render={render} />
    );
  }
});

export default ClockContainer;
