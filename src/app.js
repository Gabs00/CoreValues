define([
  'jquery',
  'angular',
  'uiRouter',
  'uiBootstrap'
  ],
  function($, angular){
    var app = angular.module('CoreValues', ['ui.router', 'ui.bootstrap']);

    app.config([
      '$stateProvider',
      '$urlRouterProvider',
      function(stateProvider, urlRouterProvider){
        urlRouterProvider.otherwise('/home/votw');

        stateProvider
          .state('home', {
            url:'/home',
            templateProvider: function($templateCache){
              return $templateCache.get('home.html');
            }
          })
          .state('home.votw', {
            url:'/votw',
            templateProvider: function($templateCache){
              return $templateCache.get('votw.html');
            }
          })
          .state('home.values', {
            url:'/values',
            templateProvider: function($templateCache){
              return $templateCache.get('corevalues.html');
            }
          });
      }]);

      return app;
    }
);
