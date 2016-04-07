var url = "http://api.spitcast.com/api/county/spots/";
// var url = "http://api.spitcast.com/api/spot/forecast/";
var requestM = require('request');

module.exports = {
  getCSpots: getCSpots
  // getCSpotsDeats: getCSpotsDeats
}

function getCSpots(req, res) {
  console.log(req.body);
  var info;
  requestM(url + req.body.county, function(err, resp, body) {
    info = JSON.parse(body)
    res.json(info);
  })
}

function getCSpotsDeats(req, res) {
  console.log(req.body);
  var info;
  requestM(url + req.body.spot_id, function(err, resp, body) {
    info = JSON.parse(body)
    res.json(info);
  })
}
