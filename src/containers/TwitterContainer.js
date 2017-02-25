import React from 'react';

import Tweets from '../components/Tweets';
import Widget from './Widget';

var TwitterContainer = React.createClass({

  render: function() {
    var render =
    <div>
      <ul className="twitter" id="tweets">
        <Tweets />
      </ul>
    </div>;

      var options = {
        size: {
          width: 4,
          height: 3
        },
        pos: {
          x: 1,
          y: 4
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
      <Widget options={options} render={render} />

    );
  },
});

export default TwitterContainer;
