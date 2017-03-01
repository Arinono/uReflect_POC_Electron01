import React from 'react';
import cp from 'child_process';

var RssFeed = React.createClass({
  getInitialState: function() {

    return {
      child: cp.fork('assets/js/read-rssfeed')
    }
  },
  render: function() {
    this.state.child.on('message', function(html) {
      html = html.replace(/<!--/g, "");
      html = html.replace(/-->/g, "");
      html = html.replace(/<!/g, "");
      html = html.replace(/]]>/g, "");
      html = html.replace(/\[CDATA\[/g, "");
      html = html.replace(/&lt;!/g, "");
      html = html.replace(/]]&gt;/g, "");
      $(".rssfeed").append(html);
    });
    return (null);
  }
});

export default RssFeed;
