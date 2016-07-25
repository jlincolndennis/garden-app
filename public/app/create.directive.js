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

    // createController.$inject = ['gardenService']

    function createController() {
      var vm = this;

    }
}());
