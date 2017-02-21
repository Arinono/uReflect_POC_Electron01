import React from 'react';
import cp from 'child_process';

var TwitterContainer = React.createClass({
  render: function() {

    console.log("READ");

    var child = cp.fork('./read-twitter');

    child.on('message', function(m) {
      console.log('received: ' + m);
    });

   console.log("READ2");

    return (null);
  }
});

export default TwitterContainer;
