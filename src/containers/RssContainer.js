import React from 'react';

import RssFeed from '../components/RssFeed';
import Widget from './Widget';

var RssContainer = React.createClass({

  render: function() {
    var render =
    <div>
      <div className="overlay"></div>
        <ul className="rssfeed render" id="rssfeed">
          <RssFeed />
        </ul>
      </div>;

    var options = {
      size: {
        width: 4,
        height: 3
      },
      pos: {
        x: 5,
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

export default RssContainer;
