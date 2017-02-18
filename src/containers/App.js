import React from 'react';

import TestWidget from '../components/TestWidget';
import ClockContainer from './ClockContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer">
        <ClockContainer />
      </div>
    );
  }
});

export default App;
