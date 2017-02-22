import React from 'react';

import Tweets from '../components/Tweets';
import Widget from './Widget';

var TwitterContainer = React.createClass({

  render: function() {
    var render =
    <ul className="twitter" id="tweets">
      <Tweets />
    </ul>;

    return (
      <Widget width="4" height="3" posX="1" posY="4" debug="false" render={render} />
    );
  },
});

export default TwitterContainer;
