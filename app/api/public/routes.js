'use strict';

//angular.module('caballoApp').
caballoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
          .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeController'})
          .when('/login', {
        templateUrl: 'users/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'})
          .when('/upload', {
        templateUrl: 'uploadimage/uploadimage.html',
        controller: 'MyCtrl',
        controllerAs: 'vm'})
          .when('/register', {
        templateUrl: 'users/register/register.html',
        controller: 'registerCtrl',
        controllerAs: 'vmr'})
          .when('/profil', {
        templateUrl: 'users/profile/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vmp'})

          .when('/', {
        templateUrl: 'articles/listarticle.html', controller: 'ArticleCtrl'})
            .when('/NGarticle/:_id?', {
        templateUrl: 'articles/onearticle.html', controller: 'OneArticleCtrl'})
           .when('/page1', {
        templateUrl: 'views/page1.html'})
           .when('/page2', {
        templateUrl: 'views/page2.html'})
      //.when('/page1', {

        //views/onearticle.html


        //templateUrl: 'views/page1.html'})
         //  .when('/page2', {
       // templateUrl: 'views/page2.html'})
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode({enable: true, requireBase: false});
  }]);