var url = "http://api.spitcast.com/api/county/spots/";
var requestM = require('request');

module.exports = {
  getCSpots: getCSpots
}

function getCSpots(req, res) {
  console.log(req.body);
  var info;
  requestM(url + req.body.county, function(err, resp, body) {
    info = JSON.parse(body)
    res.json(info);
  })
}
