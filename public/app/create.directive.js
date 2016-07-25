(function() {
  'use strict';

  angular.module('app')
    .directive('grCreate', createDirective)

    function createDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/templates/create.html',
        controller: createController,
        controllerAs: 'vm'
      }
    }

    createController.$inject = ['gardenService']

    function createController(gardenService) {
      var vm = this;
      vm.newGarden = {};
      vm.createGarden = createGarden;

      function createGarden(form) {
        var newGarden = angular.copy(vm.newGarden)
        console.log(newGarden);

      }

    }
}());
