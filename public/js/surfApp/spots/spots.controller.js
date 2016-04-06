(function() {
  "use strict";

  angular
    .module('surfApp')
    .controller('SpotsController', SpotsController);

  SpotsController.$inject = ['$scope', '$uibModal'];

  function SpotsController($scope, $uibModal) {
    var vm = this;

    vm.slides = [
      {id: 0, title: 'Santa Barbara',  caption: 'Rincon',  image:'http://www.travelgrom.com/wp-content/uploads/Rincon.jpg'},
      {id: 1, title: 'Ventura',   caption: 'C Street', image: 'http://blog.guytakayamasurfboards.com/wp-content/uploads/2014/09/C-Street-Ventura-County.jpg'},
      {id: 2, title: 'Los Angeles', caption: 'Malibu', image: "http://stwww.surfermag.com/files/2013/06/100503_BURKARD_2082.jpg"},
      {id: 3, title: 'Orange County',  caption: 'Huntington Beach', image: 'http://en.blog.hotelnights.com/wp-content/plugins/php-image-cache/image.php?path=/wp-content/uploads/2013/08/surf-in-california.jpg'}
    ];

    vm.openModal = openModal;

    function openModal(size) {
      $uibModal.open({
        animation:   true,
        templateUrl: 'modal-content',
        controller:  'SpotsModalController',
        size:        'md',
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
  }

})();
