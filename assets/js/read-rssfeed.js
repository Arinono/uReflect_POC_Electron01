var $ = require('jquery')(require("jsdom").jsdom().defaultView);
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function getData(sxml) {
  var xml = $(sxml);
  xml.find("item").each(function() {
    html = `<li>
              <p>`+$(this).find("title").html()+`</p>
              <p>`+$(this).find("description").html()+`</p>
              <p>`+$(this).find("pubDate").html()+`</p>
            </li>`;
    process.send(html);
  });
}

function readRss(client) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      getData(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", "http://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/", true);
  xmlhttp.send();
}

readRss();
process.on('disconnect', function() {
  process.exit(0);
});
