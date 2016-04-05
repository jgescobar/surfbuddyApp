(function() {
  "use strict";

  angular
    .module("SurfApp")
    .controller("SpikeController", SpikeController);

  SpikeController.$inject = ["$log"];

  function SpikeController($log) {
    var vm = this;

    //Binding
    vm.createSurfReport = createSurfReport;
    vm.surfReport = {

    }
  }
})
