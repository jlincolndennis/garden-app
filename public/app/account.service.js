(function() {
  'use strict';

  angular.module('app')
    .factory('accountService', accountFactory);

    accountFactory.$inject = ['$http', '$state', '$window'];

    function accountFactory($http, $state, $window) {
      return {
        signIn: signIn,
        signUp: signUp
      }

      function signIn(user) {
        var url = '/api/v1/users/signin'
        return $http.post(url, user)
          .then(function (res) {
            console.log(res);
            if(res.data.token !== undefined){
              $window.localStorage.setItem('token', res.data.token)
              $state.go('garden')
            }
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
