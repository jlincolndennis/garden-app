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

    accountController.$inject = ['$log', 'accountService']

    function accountController($log, accountService) {
      var vm = this;
      vm.signInSubmit = signInSubmit;
      vm.signUpSubmit = signUpSubmit;

      function signInSubmit(form) {
        var user = angular.copy(vm.existingUser);
        vm.existingUser = {};
        return accountService.signIn(user)
      }

      function signUpSubmit(form) {
        var newUser = angular.copy(vm.newUser);
        vm.newUser = {};
        return accountService.signUp(newUser);
      }
    }
}());
