'use strict';

//angular.module('caballoApp').
caballoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
          .when('/', {
        templateUrl: 'views/input.html', controller: 'ArticleCtrl'})
            .when('/NGarticle/:_id?', {
        templateUrl: 'views/onearticle.html', controller: 'OneArticleCtrl'})
           .when('/page1', {
        templateUrl: 'views/page1.html'})
           .when('/page2', {
        templateUrl: 'views/page2.html'})
      //.when('/page1', {

        //


        //templateUrl: 'views/page1.html'})
         //  .when('/page2', {
       // templateUrl: 'views/page2.html'})
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode({enable: true, requireBase: false});
  }]);