//Bootstraps out app
//Puts everything together to be displayed on dom
//Notice no need for ng-app in html/*
define([
  'angular',
  'templates',
  'app',
  'services',
  'controllers',
  'directives'],

  function (angular) {
    angular.bootstrap(document, ['CoreValues']);
  }
);
