import React from 'react';
import cp from 'child_process';

var Tweets = React.createClass({

  render: function() {

    var child = cp.fork('./read-twitter');

    child.on('message', function(tweets) {
        console.log('received: ' + tweets);
        var tweetsCollection = document.getElementById("tweets");

        tweets.forEach(function(tweet) {
              var li = document.createElement("LI");
              var text = document.createTextNode("By @" + tweet.user + ": " + tweet.text);
              li.appendChild(text);
              tweetsCollection.appendChild(li);
          });
      });

    return (<ul id="tweets"></ul>)
  }

});

export default Tweets;
