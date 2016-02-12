'use strict';
//register all modules  https://youtu.be/5uhZCc0j9RY
var caballoApp = angular.module('caballoApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ngFileUpload',
  'dialogs.main',
  'mp.datePicker' //https://github.com/m-e-conroy/angular-dialog-service
])
  .config(['$resourceProvider', function($resourceProvider) {
    // this is to allow calling GET /todos/ instead of /todos
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .config(['dialogsProvider',function(dialogsProvider){

    dialogsProvider.setSize('sm');
  }])
  .config(['$translateProvider',function($translateProvider){
    
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('en-US');

    $translateProvider.translations('en-US',{
      DIALOGS_OK: 'OK'
    });

  }]);
