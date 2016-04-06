(function() {
  "use strict";

  angular
    .module('surfApp')
    .controller('SpotsModalController', SpotsModalController);

  SpotsModalController.$inject = ['$scope', '$uibModalInstance'];

  function SpotsModalController($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

})();
