import React from 'react';

import TestWidget from '../components/TestWidget';

var App = React.createClass({
  render: function() {
    return (
      <div className="widgetContainer">
        <TestWidget />
        <TestWidget />
      </div>
    );
  }
});

export default App;
