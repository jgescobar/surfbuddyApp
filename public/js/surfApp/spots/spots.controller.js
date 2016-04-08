(function() {
  "use strict";

  angular
    .module('surfApp')
    .controller('SpotsController', SpotsController);

  SpotsController.$inject = ['$scope', '$uibModal', '$http', '$log', '$state'];

  function SpotsController($scope, $uibModal, $http, $log, $state) {
    var vm = this;

    vm.slides = [
      {id: 0, title: 'Santa Barbara',  caption: 'Rincon',  image:'http://www.travelgrom.com/wp-content/uploads/Rincon.jpg'},
      {id: 1, title: 'Ventura',   caption: 'C Street', image: 'http://blog.guytakayamasurfboards.com/wp-content/uploads/2014/09/C-Street-Ventura-County.jpg'},
      {id: 2, title: 'Los Angeles', caption: 'Malibu', image: "http://stwww.surfermag.com/files/2013/06/100503_BURKARD_2082.jpg"},
      {id: 3, title: 'Orange County',  caption: 'Huntington Beach', image: 'http://en.blog.hotelnights.com/wp-content/plugins/php-image-cache/image.php?path=/wp-content/uploads/2013/08/surf-in-california.jpg'}
    ];



    vm.openModal = openModal;
    vm.spotChoice = "";
    vm.getCountySpots = getCountySpots;
    vm.getCntySptsDeats = getCntySptsDeats;
    vm.spotDeats = '';


    function openModal(size) {
      $uibModal.open({
        animation:   true,
        templateUrl: 'modal-content',
        controller:  'SpotsModalController',
        size:        'lg',
        resolve: {
          location: function () {
            return {
              latitude:  vm.latitude,
              longitude: vm.longitude
            };
          }
        }
      });
    }
      function getCountySpots() {
        var spots = [];
        if (vm.spotChoice !== '') {
          $http
            .post("/api/cspots", {county: vm.spotChoice})
            .success(function(res) {
              //res is an array
              vm.countSelected = res;
              res.forEach(function(spot){
                spots.push(spot);
                vm.spots = spots;
                $log.info(spots);
              });
              // $log.info(vm.countSelected);
            }, function(err) {
              $log.info(err)
            });
        }
      }
      function getCntySptsDeats() {
        if (vm.spotDeats !== '') {
          console.log("vmspotsDeats", vm.spotDeats)
          $http
            .post("/api/cspotsdeats/", {spot: vm.spotDeats})
            .success(function(res) {
              //res is an array
              $log.info('this is deats res', res);
              vm.spotDetails = res;
              $state.go('spots.detail');
              $scope.map = { center: { latitude: vm.spotDetails[0].latitude, longitude: vm.spotDetails[0].longitude }, zoom: 15 };
            }, function(err) {
              $log.info(err);
          })
            $http({
              url: 'http://api.wunderground.com/api/f0261b181a638bd2/conditions/q/CA/' + vm.spotChoice + '.json',
              method: 'GET',
              dataType: "application/json"
            }).then(
             function(res) {
                console.log(res)
                vm.weather = res.data.current_observation
              }, function(err) {
                console.log(err)
              }
            )

        }
      }

     //Don't touch these:
     }
})();
