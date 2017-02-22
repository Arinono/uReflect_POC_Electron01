import React from 'react';

var YouTubeContainer = React.createClass({
  var render =
    <div className="youtube">
      <object width="100%" height="100%">
        <param name="movie" value="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"/>
        <param name="allowFullScreen" value="true"/>
        <param name="allowscriptaccess" value="always"/>
        <embed width="100%" height="100%" src="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent" class="youtube-player" type="text/html" allowscriptaccess="always" allowfullscreen="true"/>
      </object>
    </div>
  render: function() {
    return (
      <Widget width="4" height="3" posX="7" posY="1" debug="false" render={render} />
    )
  }
});


export default YouTubeContainer;
