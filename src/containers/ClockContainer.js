import React from 'react';
var $ = require('jquery');

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

    var options = {
      size: {
        width: 1,
        height: 1
      },
      pos: {
        x: 12,
        y: 1
      },
      behaviour: {
        resizable: false,
        draggable: true,
        debug: false
      },
      resizeOpt: {
        horizontal: false,
        vertical: false
      }
    }

    return (
      <Widget options={options} render={render} />
    );
  }
});

export default ClockContainer;
