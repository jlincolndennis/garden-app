(function() {
  'use strict';

  angular.module('app')
    .directive('grGarden', gardenDirective)

    function gardenDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/templates/garden.html',
        controller: gardenController,
        controllerAs: 'vm'
      }
    }

    gardenController.$inject = ['accountService']

    function gardenController(accountService) {
      var vm = this;

    }
}());
