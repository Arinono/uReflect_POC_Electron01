import React from 'react';

import DateDay from '../components/DateDay'

var DateContainer = React.createClass({
  render: function() {
    return (
      <div className="widget date">
        <DateDay />
      </div>
    );
  }
});

export default DateContainer;
