import React from 'react';
import cp from 'child_process';

import Twitter from 'twitter';

var Tweets = React.createClass({

  getInitialState: function() {
    return {
      client: new Twitter({
        consumer_key: '1sDZfiMtUdzmiD07l1J09MSm3',
        consumer_secret: 'UUiGKANaCWNt6n9CZ2hhFQ2ExStgN4Elops4JNMy0mANNnFOVP',
        access_token_key: '833674085196562432-noLShBs8r8NmC7OwH2dEXSnnj43pPyK',
        access_token_secret: 'dxtnZG5OSVvB7hHa84AUuAotThSBqFjVC8WKjwpCMPNgD'
      }),
      child: cp.fork('assets/js/read-twitter')
    }
  },

  componentDidMount: function() {
    setInterval(function(){
      $('.test').each(function(i, obj) {
        $(this).text(moment($(this).attr("date"), 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow());
      });
    }, 10000);
  },

  render: function() {

    var client = this.state.client;
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

    this.state.child.on('message', function(tweet) {

      var tweetsCollection = document.getElementById("tweets");

      if (document.getElementById("twitter_" + tweet.id_str) == null) {

                var retweeted = "";
                var favorited = "";
                if (tweet.retweeted == true)
                  retweeted = "twitter_retweeted";
                if (tweet.favorited == true)
                  favorited = "twitter_faved";

                var ago = moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow();

                var li = `<li class="twitter_li row" id="twitter_`+tweet.id_str+`">
                            <img class="col-md-2 no-float twitter_img" src="`+tweet.user.profile_image_url+`"></img>
                            <div class="col-md-6"><span class="twitter_username">`+tweet.user.name+`</span> | @`+tweet.user.screen_name+`</div>
                            <p class="col-md-4 test" date="`+tweet.created_at+`" id="timeago`+tweet.id_str+`">`+ago+`</p>
                            <p class="col-md-10">`+tweet.text+`</p>
                            <button id="retweet`+tweet.id_str+`" class="`+retweeted+` col-md-1 twitter_retweet twitter_button twitter_anim250"><i class="fa fa-retweet fa-lg" aria-hidden="true"></i></button>
                            <p id="retweet_text`+tweet.id_str+`" class="col-md-1 twitter_anim250">`+tweet.retweet_count+`</p>
                            <button id="fav`+tweet.id_str+`" class="`+favorited+` col-md-1 twitter_fav twitter_button twitter_anim250"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></button>
                            <p id="fav_text`+tweet.id_str+`" class="col-md-1 twitter_anim1000">`+tweet.favorite_count+`</p>
                          </li>`;

                $('#tweets').prepend(li);
                $('#tweets').scrollTop($('#tweets').scrollTop() + 150 + 15);


                }
      });

    return (null);
  }

});

export default Tweets;
