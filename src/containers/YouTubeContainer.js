import React from 'react';
import Widget from './Widget.js';

var YouTubeContainer = React.createClass({
  render: function() {
    var $ = require('jquery');
    var width = $(".youtube").width(), height = $(".youtube").height();
    console.log(width, height);
    var render =
      <div className="youtube">
        <object width={width} height={height}>
          <param name="movie" value="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"/>
          <param name="allowFullScreen" value="true"/>
          <param name="allowscriptaccess" value="always"/>
          <embed width="100%" height="100%" src="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent" class="youtube-player" type="text/html" allowFullScreen="true"/>
        </object>
      </div>;
    return (
      <Widget width="4" height="2" posX="8" posY="2" debug="false" render={render} />
    )
  }
});


export default YouTubeContainer;
