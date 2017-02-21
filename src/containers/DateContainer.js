import React from 'react';

import DateDay from '../components/DateDay'

var DateContainer = React.createClass({
  render: function() {
    var initialPos = {
      transform: "translate(480px, -737px)"
    }
    return (
      <div className="widget date" style={initialPos}>
        <DateDay />
      </div>
    );
  }
});

export default DateContainer;
