function callApi(client) {
  var Twitter = require('twitter');
  var client = new Twitter({
    consumer_key: '1sDZfiMtUdzmiD07l1J09MSm3',
    consumer_secret: 'UUiGKANaCWNt6n9CZ2hhFQ2ExStgN4Elops4JNMy0mANNnFOVP',
    access_token_key: '833674085196562432-noLShBs8r8NmC7OwH2dEXSnnj43pPyK',
    access_token_secret: 'dxtnZG5OSVvB7hHa84AUuAotThSBqFjVC8WKjwpCMPNgD'
//        bearer_token: 'AAAAAAAAAAAAAAAAAAAAAAkrzQAAAAAASV8FW0nC3XWQIE9xoBR7P5BpaLs%3D4aCs9c5AplULzYlQFlEt0bgTSUdD2bxRrkcaBEMwUtN7n1ylLy'
  });

  var params = {count: 100};//{q: 'place:40ce1cd0eac02958', lang: 'fr', count: 50};
  client.get('statuses/home_timeline', params, function(error, tweets, response) {
    tweets.reverse();
    tweets.forEach(function(tweet) {
      process.send(tweet);
    });
  });

  var stream = client.stream('user', {});
  stream.on('data', function(event) {
    process.send(event);
  });

}

callApi();
process.on('disconnect', function() {
process.exit(0);
});
