import React from 'react';

import DateDay from '../components/DateDay'
import Widget from './Widget';

var DateContainer = React.createClass({

  render: function() {
    var render =
      <div className="date">
        <DateDay />
      </div>;

      var options = {
        size: {
          width: 6,
          height: 1
        },
        pos: {
          x: 4,
          y: 1
        },
        behaviour: {
          resizable: true,
          draggable: true,
          debug: false
        },
        resizeOpt: {
          horizontal: true,
          vertical: true
        }
      }

    return (
      <Widget options={options} render={render}/>
    );
  }
});

export default DateContainer;
