(function() {
  'use strict';

  angular.module('app')
    .directive('grDash', dashDirective)

    function dashDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/templates/dash.html',
        controller: dashController,
        controllerAs: 'vm'
      }
    }

    dashController.$inject = ['accountService']

    function dashController(accountService) {
      var vm = this;
      
    }
}());
