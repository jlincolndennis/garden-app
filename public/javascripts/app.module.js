(function() {
  'use strict';

  var dependencies = [
    'ui.router'
  ];

  angular.module('app', dependencies)
    .config(setUpStates)

    setUpStates.$inject = [
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      '$httpProvider'
    ]

    function setUpStates($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: '/app/templates/home.html'
        })
        .state('landing', {
          url: '/',
          parent: 'app',
          template: '<h1>Hello from landing state!</h1>'
        })
        .state('user', {
          url: '/user',
          parent: 'app',
          template: '<h1>Hello from user state!</h1>'
        })
        .state('garden', {
          url: '/garden',
          parent: 'app',
          template: '<h1>Hello from garden state!</h1>'
        })
        .state('create', {
          url: '/create',
          parent: 'app',
          template: '<h1>Hello from create state!</h1>'
        })

    }


}());