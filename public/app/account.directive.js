(function() {
  'use strict';

  angular.module('app')
    .directive('grAccount', accountDirective)

    function accountDirective() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: '/app/templates/account.html',
        controller: accountController,
        controllerAs: 'vm'
      }
    }

    accountController.$inject = ['$log']

    function accountController($log) {
      var vm = this;
      $log.log('Hello from the account controller!')

    }
}());
