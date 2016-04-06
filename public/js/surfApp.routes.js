(function() {
  'use strict';

  angular
    .module('surfApp')
    .config(routes);

  routes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('splash', {
        url: '/',
        templateUrl: '/js/surfApp/splash/splash.html'
      })
      .state('spots', {
        url: '/spots',
        templateUrl: '/js/surfApp/spots/spots.html'
      })
      .state('spots.detail', {
        url: '/:spotName',
        templateUrl: '/js/surfApp/spots/spots.detail.html',
        controller: function ($stateParams) {
          console.log("$stateParams");
        }
      });

    // $urlRouterProvider.otherwise('/');
  }

})();
