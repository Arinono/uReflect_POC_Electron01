import React from 'react';

import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: 'calc(100vw/12)',
  height: 310,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

var SpotifyContainer = React.createClass({
  render: function() {
    return (
      <SpotifyPlayer
        uri="spotify:album:0yuw7BFiiyglvL4a2KtGut"
        size={size}
        view={view}
        theme={theme}
      />
    );
  }
});

export default SpotifyContainer;
