(function() {
  'use strict';

  angular.module('app')
    .factory('gardenService', gardenFactory)

    gardenFactory.$inject = ['$http', '$state', '$window'];

    function gardenFactory($http, $state, $window) {
      return {
        newGarden: newGarden
        // getGarden: getGarden;
      }
    }

    function newGarden(garden) {
      console.log(garden);
    }

}());
