import React from 'react';

import Tweets from '../components/Tweets';
import Widget from './Widget';

var TwitterContainer = React.createClass({

  render: function() {

    $( document ).ready(function() {
      $('.twitter_container').on('click', '.twitter_scrolltop',function() {
        $('#tweets').animate({
          scrollTop:0
        }, 'slow');
        });
      });
    var render =
    <div className="twitter_container">
      <div className="col-md-3"></div>
      <button className="col-md-6 twitter_button twitter_scrolltop"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      <ul className="twitter" id="tweets">
        <Tweets />
      </ul>
    </div>;

    return (
      <Widget width="4" height="3" posX="1" posY="4" debug="false" render={render} />

    );
  },
});

export default TwitterContainer;
