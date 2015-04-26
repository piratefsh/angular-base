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
// Displays a loading indicator as long as flag is true
angular.module('app.directives').directive('loadingIndicator',['$window', '$location', function($window, $location){
    return{
        restrict: 'E',
        templateUrl: 'app/directives/templates/loading_indicator.html',
        scope: {
            isLoading: '=',
            fullscreen: '=' 
        },
        controller: function($scope, $element){

        }
    }
}]);
angular.module('app.controllers').controller('HomeController', ['$scope', function($scope){
  $scope.now = new Date();
}]);