import React from 'react';

import SpotifyPlayer from 'react-spotify-player';
import Widget from './Widget';

var SpotifyContainer = React.createClass({
  render: function() {
    var width = $(window).width() / 12 * 2,
    height = $(window).height() / 6  * 2,
    size = {
      width: width,
      height: height
    },
    view = 'list', // or 'coverart'
    theme = 'black'; // or 'white'

    var render =
      <SpotifyPlayer
        uri="spotify:album:0yuw7BFiiyglvL4a2KtGut"
        size={size}
        view={view}
        theme={theme}
      />

    return (
      <Widget width="2" height="2" posX="1" posY="5" debug="false" render={render} />
    );
  }
});

export default SpotifyContainer;
