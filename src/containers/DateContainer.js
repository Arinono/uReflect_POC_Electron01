import React from 'react';

import DateDay from '../components/DateDay'
import Widget from './Widget';

var DateContainer = React.createClass({
  render: function() {
    var render =
      <div className="date">
        <DateDay />
      </div>;

    return (
      <Widget width="6" height="1" posX="4" posY="1" debug="false" render={render}/>
    );
  }
});

export default DateContainer;
