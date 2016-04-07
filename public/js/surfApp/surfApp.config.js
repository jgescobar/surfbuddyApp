(function() {
  "use strict";

  angular
    .module("surfApp")
    .config(loadGoogleMaps);

    loadGoogleMaps.$inject = ["uiGmapGoogleMapApiProvider"];

    function loadGoogleMaps(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDPXtqJAaBUmNPNNFXrPTGEu4lRSYS4qYI',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  }
})();


