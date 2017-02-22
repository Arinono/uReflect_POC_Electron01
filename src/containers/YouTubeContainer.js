import React from 'react';
import YouTube from 'react-youtube';

var YouTubeContainer = React.createClass({
  render: function() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };
    var style = {
      position: 'relative'
    }
    return (
      <div className="widget">
        <YouTube
          videoId="q2pj6pAcmbk"
          opts={opts}
          onReady={this._onReady}  style={style}/>
      </div>
    )
  },
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
});


export default YouTubeContainer;
