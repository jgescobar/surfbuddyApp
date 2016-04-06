(function() {
  "use strict";

  angular
    .module('surfApp')
    .controller('SpotsController', SpotsController);

  SpotsController.$inject = ['$scope', '$uibModal'];

  function SpotsController($scope, $uibModal) {
    var vm = this;

    vm.slides = [
      {id: 0, title: 'Slide One',   caption: 'Something old.',      image: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/558/cache/surfing-bali-indonesia_55825_600x450.jpg'},
      {id: 1, title: 'Slide Two',   caption: 'Something new.',      image: 'https://westernthm.files.wordpress.com/2011/11/surfing1.jpg'},
      {id: 2, title: 'Slide Three', caption: 'Something borrowed.', image: 'http://en.blog.hotelnights.com/wp-content/plugins/php-image-cache/image.php?path=/wp-content/uploads/2013/08/surf-in-california.jpg'},
      {id: 3, title: 'Slide Four',  caption: 'Something blue.',     image: 'http://stwww.surfermag.com/files/2013/06/100503_BURKARD_2082.jpg'}
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
