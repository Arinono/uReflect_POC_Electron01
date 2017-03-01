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

    return (
      <Widget width="4" height="3" posX="5" posY="4" debug="false" render={render} />

    );
  },
});

export default RssContainer;
