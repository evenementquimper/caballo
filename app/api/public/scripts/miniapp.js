//'use strict';
//register all modules
angular.module('miniApp', []).
    config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Model(true);
    // this is to allow calling GET /todos/ instead of /todos
    $routeProvider.when("/page1",
      {
        templateUrl: "/views/page1.html",
        controller: "Page1Ctrl"
      }
    )
  });