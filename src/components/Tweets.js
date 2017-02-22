import React from 'react';
import cp from 'child_process';

var Tweets = React.createClass({

  componentWillUnmount: function() {
      child.kill();
  },

  render: function() {

    var Twitter = require('twitter');
    var client = new Twitter({
      consumer_key: '1sDZfiMtUdzmiD07l1J09MSm3',
      consumer_secret: 'UUiGKANaCWNt6n9CZ2hhFQ2ExStgN4Elops4JNMy0mANNnFOVP',
      access_token_key: '833674085196562432-noLShBs8r8NmC7OwH2dEXSnnj43pPyK',
      access_token_secret: 'dxtnZG5OSVvB7hHa84AUuAotThSBqFjVC8WKjwpCMPNgD'
    });

    $( document ).ready(function() {
        $('.widget').on('click', '.twitter_retweet',function() {
          var id = this.id;
          var id_media = id.replace('retweet', '');

          if ($( "#" + this.id ).hasClass( "twitter_retweeted" )) {
            client.post('statuses/unretweet', {id: id_media},  function(error, tweet, response) {
              if(error) throw error;
            });
            var str = $( "#retweet_text" + id_media ).text();
            str = parseInt(str) - 1;
            $( "#retweet_text" + id_media ).text(str);
            $( "#" + id ).removeClass( "twitter_retweeted" );
          }
          else {
            client.post('statuses/retweet', {id: id_media},  function(error, tweet, response) {
              if(error) throw error;
            });
            var str = $( "#retweet_text" + id_media ).text();
            str = parseInt(str) + 1;
            $( "#retweet_text" + id_media ).text(str);
            $( "#" + id ).addClass( "twitter_retweeted" );

          }
        });

        $('.widget').on('click', '.twitter_fav',function() {
          var id = this.id;
          var id_media = id.replace('fav', '');
          if ($( "#" + this.id ).hasClass( "twitter_faved" )) {
            client.post('favorites/destroy', {id: id_media},  function(error, tweet, response) {
              if(error) throw error;
            });
            var str = $( "#fav_text" + id_media ).text();
            str = parseInt(str) - 1;
            $( "#fav_text" + id_media ).text(str);
            $( "#" + id ).removeClass( "twitter_faved" );
          }
          else {
            client.post('favorites/create', {id: id_media},  function(error, tweet, response) {
              if(error) throw error;
            });
            var str = $( "#fav_text" + id_media ).text();
            str = parseInt(str) + 1;
            $( "#fav_text" + id_media ).text(str);
            $( "#" + id ).addClass( "twitter_faved" );
          }
        });
    });

    var child = cp.fork('./read-twitter');

    child.on('message', function(tweets) {

        console.log(tweets);
        var tweetsCollection = document.getElementById("tweets");

        tweets.forEach(function(tweet) {
              if (document.getElementById("twitter_" + tweet.id_str) == null) {

                var retweeted = "";
                var favorited = "";
                if (tweet.retweeted == true)
                  retweeted = "twitter_retweeted";
                if (tweet.favorited == true)
                  favorited = "twitter_faved";

                var li = `<li class="twitter_li row">
                            <img class="col-md-2 no-float twitter_img" src="`+tweet.user.profile_image_url+`"></img>
                            <p class="col-md-6 twitter_username">`+tweet.user.name+`</p>
                            <p class="col-md-4">@`+tweet.user.screen_name+`</p>
                            <p class="col-md-10">`+tweet.text+`</p>
                            <button id="retweet`+tweet.id_str+`" class="`+retweeted+` col-md-1 twitter_retweet twitter_button twitter_anim250"><i class="fa fa-retweet fa-lg" aria-hidden="true"></i></button>
                            <p id="retweet_text`+tweet.id_str+`" class="col-md-1 twitter_anim250">`+tweet.retweet_count+`</p>
                            <button id="fav`+tweet.id_str+`" class="`+favorited+` col-md-1 twitter_fav twitter_button twitter_anim250"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></button>
                            <p id="fav_text`+tweet.id_str+`" class="col-md-1 twitter_anim1000">`+tweet.favorite_count+`</p>
                          </li>`;
                  $("#tweets").append(li);
//                tweetsCollection.appendChild(li);
              }
          });
      });

    return (<ul id="tweets"></ul>);
  }

});

export default Tweets;
