'use strict';

var controllers = angular.module('app.controllers', []);
var factories = angular.module('app.factories', []);
var models = angular.module('app.models', []);
var directives = angular.module('app.directives', []);
// var services = angular.module('app.services', []);
var dashboard = angular.module('app', 
  ['app.controllers', 'app.factories', 'app.models', 'app.directives',
  'ngRoute', 'ui.router']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/views/home.html',
            controller: 'HomeController'
    })
}]);