import React from 'react';

import SpotifyPlayer from 'react-spotify-player';
import Widget from './Widget';

const defaultSize = {
  width: 3,
  height: 3
};

var SpotifyContainer = React.createClass({
  render: function() {
    var width = $(window).width() / 12 * defaultSize.width,
    height = $(window).height() / 6  * defaultSize.height,
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

    var options = {
      size: {
        width: defaultSize.width,
        height: defaultSize.height
      },
      pos: {
        x: 10,
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
  }
});

export default SpotifyContainer;
