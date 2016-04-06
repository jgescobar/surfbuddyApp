(function() {
  "use strict";

  angular
    .module('surfApp')
    .controller('surfController', surfController);

  surfController.$inject = ['$http'];

  function surfController($http) {
    var vm = this;

    //Binding
    // vm.all = [];
    // vm.selected = {};
    // vm.show = show;
    // vm.fetch = fetch;
    // vm.select = select;
    // vm.isSelected = isSelected;


    //Helpers

          // Dropdown Button to select County  [then another one for Spot]

    // function fetch(vm) {
    //   $http
    //     .get('/api/county/spot/all')
    //     .then(function(res) {
    //       vm.all = res.data;
    //     })
    // };

    // function show(vm) {
    //   vm.selected = vm;
    // };

    // function select(vm) {
    //   vm.selected = vm;
    // };

    // function isSelected() {
    //   return vm.selected != undefined;
    // };

                  // Google Maps

    // var map;

    // vm.initMap = function() {
    //   map = new google.maps
    //     .Map(document.getElementById('map'), {
    //       center: {lat: vm.selected.latitude , lng: vm.selected.longitude},
    //       zoom: 8
    //     });
    // };

                    // Weather Underground

    // vm.getWeather = function() {
    //   $http({
    //     icon_url: 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + vm.selected.zip + '.json',
    //     dataType: "json",
    //     succes: function(parsed_json) {
    //       var temp_f = parsed_json['current_observation']['temp_f'];
    //       var weather = parsed_json['current_observation']['weather'];
    //       var wind = parsed_json['current_observation']['wind_mph'];
    //       var iconUrl = parsed_json['current_observation']['icon_url'];
    //       var icon = parsed_json['current_observation']['icon'];
    //       var feelsLikeTempF = parsed_json['current_observation']['feelslike_f'];
    //       var forecastLink = parsed_json['current_observation']['forecast_url'];

    //       var $currentTempDiv = $('.actual-temp').html(temp_f + '&#176 F');
    //       var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempF + '&#176 F');
    //       var $iconDiv = $('#weather-icon').html("<img class='icon' src='" + iconUrl + "' alt='" + icon + "'>");
    //       var $conditionDiv = $('#weather-condition').html("<p>" + weather + "</p>");
    //       var $windDiv = $('.wind').html('<p> Wind: ' + wind + ' mph </p>');
    //       var $forecastDiv = $('#10forecast').html('<a href="' + forecastLink + '" target="_blank" class="forecast-link">View 10-Day Forecast</a>')
    //     }
    //   });
    // };

    // vm.getForecast = function() {
    //   $http({
    //     url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + vm.selected.zip + '.json',
    //     dataType : "json",
    //     success : function(parsed_json) {
    //       var today = parsed_json.forecast.simpleforecast.forecastday[0];
    //       var weekday = today.date.weekday;
    //       var monthShort = today.date.monthname_short + ".";
    //       var date = today.date.day;
    //       var high_f = today.high.fahrenheit;
    //       var low_f = today.low.fahrenheit;
    //       var high_c = today.high.celsius;
    //       var low_c = today.low.celsius;

    //       var $dateDiv = $('#date').html('<h3>' + weekday + ', ' + monthShort + ' ' + date + '</h3>')
    //       var $highLowDiv = $('#high').html('H: ' + high_f + '&#176 F / L: ' + low_f + '&#176 F');
    //     }
    //   });
    // };

    // vm.switchToC = function() {
    //   $http({
    //     url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + vm.selected.zip + '.json',
    //     dataType : "json",
    //     success : function(parsed_json) {
    //       var temp_c = parsed_json['current_observation']['temp_c'];
    //       var feelsLikeTempC = parsed_json['current_observation']['feelslike_c'];
    //       var $currentTempDiv = $('.actual-temp').html(temp_c + '&#176 C');
    //       var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempC + '&#176 C');
    //     }
    //   });
    // };

    // vm.switchToC2 = function() {
    //   $http({
    //     url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + vm.selected.zip + '.json',
    //     dataType : "json",
    //     success : function(parsed_json) {
    //       var today = parsed_json.forecast.simpleforecast.forecastday[0];
    //       var high_c = today.high.celsius;
    //       var low_c = today.low.celsius;
    //       var $highLowDiv = $('#high').html('H: ' + high_c + '&#176 C / L: ' + low_c + '&#176 C');
    //     }
    //   });
    // };

    // vm.switchToF = function() {
    //   $http({
    //     url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/conditions/q/' + vm.selected.zip + '.json',
    //     dataType : "json",
    //     success : function(parsed_json) {
    //       var temp_f = parsed_json['current_observation']['temp_f'];
    //       var feelsLikeTempF = parsed_json['current_observation']['feelslike_f'];
    //       var $currentTempDiv = $('.actual-temp').html(temp_f + '&#176 F');
    //       var $feelsLikeDiv = $('.feels-like').html('Feels like: ' + feelsLikeTempF + '&#176 F');
    //     }
    //   });
    // };

    // vm.switchToF2 = function() {
    //   $http({
    //     url : 'http://api.wunderground.com/api/' + process.env.DB_PASS + '/geolookup/forecast/q/' + vm.selected.zip + '.json',
    //     dataType : "json",
    //     success : function(parsed_json) {
    //       var today = parsed_json.forecast.simpleforecast.forecastday[0];
    //       var high_f = today.high.fahrenheit;
    //       var low_f = today.low.fahrenheit;
    //       var $highLowDiv = $('#high').html('H: ' + high_f + '&#176 C / L: ' + low_f + '&#176 C');
    //     }
    //   });
    // };

    // vm.fetch();
  };

})



