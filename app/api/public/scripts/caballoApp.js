//'use strict';
//register all modules
var caballoApp = angular.module('caballoApp', []);

  caballoApp.config(function($routeProvider) {
    // this is to allow calling GET /todos/ instead of /todos
    $routeProvider.when('/page1',

      {
        templateUrl: "/views/page1.html",
        controller: "Page1Ctrl"
      }
    )
  });

  caballoApp.controller("caballoCtrl", function ($scope){
    $scope.model = {
      message: "La page 1"
    }
  })