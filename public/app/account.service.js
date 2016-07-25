(function() {
  'use strict';

  angular.module('app')
    .factory('accountService', accountFactory);

    accountFactory.$inject = ['$http'];

    function accountFactory($http) {
      return {
        signIn: signIn,
        signUp: signUp
      }

      function signIn(user) {
        var url = '/api/v1/users/signin'
        return $http.post(url, user)
          .then(function (res) {
            console.log(res);
          })
      }

      function signUp(newUser) {
        var url = '/api/v1/users/signUp'
        return $http.post(url, newUser)
          .then(function (res) {
            console.log(res);
          })
    }
  }

}());
