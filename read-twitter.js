

console.log("READ1");

function callApi(client) {

  var Twitter = require('twitter');
  var client = new Twitter({
    consumer_key: '1sDZfiMtUdzmiD07l1J09MSm3',
    consumer_secret: 'UUiGKANaCWNt6n9CZ2hhFQ2ExStgN4Elops4JNMy0mANNnFOVP',
    access_token_key: '833674085196562432-noLShBs8r8NmC7OwH2dEXSnnj43pPyK',
    access_token_secret: 'dxtnZG5OSVvB7hHa84AUuAotThSBqFjVC8WKjwpCMPNgD'
//        bearer_token: 'AAAAAAAAAAAAAAAAAAAAAAkrzQAAAAAASV8FW0nC3XWQIE9xoBR7P5BpaLs%3D4aCs9c5AplULzYlQFlEt0bgTSUdD2bxRrkcaBEMwUtN7n1ylLy'
  });

  var params = {count: 50};//{q: 'place:40ce1cd0eac02958', lang: 'fr', count: 50};
  client.get('statuses/home_timeline', params, function(error, tweets, response) {
    process.send(tweets);
  });
//  setTimeout(function () {callApi(client)}, 60000 * 5);
}

var twitterReader = {
    read: function(mainWindow) {

      // var params = {screen_name: 'pewdiepie'};
      // client.get('statuses/user_timeline', params, function(error, tweets, response) {
      //   if (!error) {
      //     console.log("BONJOUR FDP");
      //     console.log(tweets);
      //   }
      //
      //   console.log("BONJOUR FDP MDR");
      //   var textContentOfTweets = tweets.map(function(t) { return { text: t.text, user: t.user.screen_name }; });
      //   console.log(textContentOfTweets);
      //   mainWindow.webContents.send("tweets", textContentOfTweets);
      // });
      /**
       * Stream statuses filtered by keyword
       * number of tweets per second depends on topic popularity
       **/
      // client.stream('statuses/filter', {track: 'bonsoir'},  function(stream) {
      //   stream.on('data', function(tweet) {
      //     console.log(tweet.text);
      //   });
      //
      //   stream.on('error', function(error) {
      //     console.log(error);
      //   });
      // });
  }

};

callApi();
//module.exports = twitterReader;
