angular
  .module('SurfApp')
  .controller('SurfController', SurfController);

SurfController.$inject = ['$http'];


function SurfController($http) {

  var surf = this;

  surf.all = [];

  surf.selected = {};

  surf.fetch = function(){
    $http
      .get('/api/surf')
      .then(function(response){
        surf.all = response.data;
      })
  };

  surf.show = function(surf){
    surf.selected = surf;
  };

  surf.select = function(surf){
    surf.selected = surf;
  }

  surf.isSelected = function(){
    return surf.selected != undefined;
  }

  var map;

  surf.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: surf.selected.latitude , lng: surf.selected.longitude},
    zoom: 8
    });
  };

  surf.getWeather = function(){
    $.ajax({
    url: 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + surf.selected.zip + '.json',
    dataType: "jsonp",
    succes: function(parsed_json) {
      var temp_f = parsed_json['current_observation']['temp_f'];
      var weather = parsed_json['current_observation']['weather'];
      var wind = parsed_json['current_observation']['wind_mph'];
      var iconUrl = parsed_json['current_observation']['icon_url'];
      var icon = parsed_json['current_observation']['icon'];
      var feelsLikeTempF = parsed_json['current_observation']['feelslike_f'];
      var forecastLink = parsed_json['current_observation']['forecast_url'];

      var $currentTempDiv = $('.actual-temp').html(temp_f + '&#176 F');
      var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempF + '&#176 F');
      var $iconDiv = $('#weather-icon').html("<img class='icon' src='" + iconUrl + "' alt='" + icon + "'>");
      var $conditionDiv = $('#weather-condition').html("<p>" + weather + "</p>");
      var $windDiv = $('.wind').html('<p> Wind: ' + wind + ' mph </p>');
      var $forecastDiv = $('#10forecast').html('<a href="' + forecastLink + '" target="_blank" class="forecast-link">View 10-Day Forecast</a>')
      }
    });
  };

  surf.getForecast = function(){
    $.ajax({
    url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + surf.selected.zip + '.json',
    dataType : "jsonp",
    success : function(parsed_json) {
      var today = parsed_json.forecast.simpleforecast.forecastday[0];
      var weekday = today.date.weekday;
      var monthShort = today.date.monthname_short + ".";
      var date = today.date.day;
      var high_f = today.high.fahrenheit;
      var low_f = today.low.fahrenheit;
      var high_c = today.high.celsius;
      var low_c = today.low.celsius;

      var $dateDiv = $('#date').html('<h3>' + weekday + ', ' + monthShort + ' ' + date + '</h3>')
      var $highLowDiv = $('#high').html('H: ' + high_f + '&#176 F / L: ' + low_f + '&#176 F');
      }
    });
  };

  surf.switchToC = function(){
    $.ajax({
    url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + surf.selected.zip + '.json',
    dataType : "jsonp",
    success : function(parsed_json) {
      var temp_c = parsed_json['current_observation']['temp_c'];
      var feelsLikeTempC = parsed_json['current_observation']['feelslike_c'];
      var $currentTempDiv = $('.actual-temp').html(temp_c + '&#176 C');
      var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempC + '&#176 C');
      }
    });
  };

  surf.switchToC2 = function(){
    $.ajax({
    url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + surf.selected.zip + '.json',
    dataType : "jsonp",
    success : function(parsed_json) {
      var today = parsed_json.forecast.simpleforecast.forecastday[0];
      var high_c = today.high.celsius;
      var low_c = today.low.celsius;
      var $highLowDiv = $('#high').html('H: ' + high_c + '&#176 C / L: ' + low_c + '&#176 C');
      }
    });
  };

   surf.switchToF = function(){
    $.ajax({
    url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + surf.selected.zip + '.json',
    dataType : "jsonp",
    success : function(parsed_json) {
      var temp_f = parsed_json['current_observation']['temp_f'];
      var feelsLikeTempF = parsed_json['current_observation']['feelslike_f'];
      var $currentTempDiv = $('.actual-temp').html(temp_f + '&#176 F');
      var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempF + '&#176 F');
      }
    });
  };

  surf.switchToF2 = function(){
    $.ajax({
    url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + surf.selected.zip + '.json',
    dataType : "jsonp",
    success : function(parsed_json) {
      var today = parsed_json.forecast.simpleforecast.forecastday[0];
      var high_f = today.high.fahrenheit;
      var low_f = today.low.fahrenheit;
      var $highLowDiv = $('#high').html('H: ' + high_f + '&#176 C / L: ' + low_f + '&#176 C');
      }
    });
  };

  surf.showInsta = function(){
    var $instaDiv = $('#instagram-div');
    var $instaHashtag = $('#instagram-hashtag');

    if(surf.selected.name === 'Rincon, CA'){
      $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#rincon</strong>');
      $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:yosemite/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'Malibu, CA'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#malibu</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:brycecanyon/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'Venice, CA'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#venice</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:deathvalley/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'El Porto, CA'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#elporto</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:joshuatree/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'Palos Verde, CA'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#palosVerde</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:redwoodNP/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'North Shore, HI'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#northShore</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:sequoiaandkingscanyon/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'Waikiki, HI'){
        $instaHashtag.html('<img class="instalogo" src="http://cdn.scahw.com.au/cdn-1cfbb585c92bb70/imagevaultfiles/id_304949/cf_3/instagram-text-logo.png"><br><br><strong>#waikiki</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:archesNP/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else if (surf.selected.name === 'lower Trestles, CA'){
        $instaHashtag.html('<img class="instalogo" src="https://www.paperflies.com/blog/wp-content/uploads/2015/04/trestles.png"><br><br><strong>#lowertrestles</strong>');
        $instaDiv.html('<iframe src="http://widget.websta.me/in/tag:canyonlands/?r=1&w=2&h=3&b=1&p=5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none;overflow:hidden;width:270px; height: 405px" ></iframe> <!-- websta - websta.me -->');
    } else {
      $instaHashtag.html("<p>No posts to display!</p>")
    }
  };


  surf.fetch();


};





