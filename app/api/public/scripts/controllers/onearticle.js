'use strict';
//doc for dialog: https://github.com/m-e-conroy/angular-dialog-service  , $http, dialogs
//
  //angular.module('caballoApp')
  angular.module('caballoApp')
.controller('OneArticleCtrl', function($scope, $http, dialogs, $routeParams) {


var refresh = function(){
		//console.log("ID: "+$routeParams._id);
	$http.get('/article/' + $routeParams._id).success(function(response){
		$scope.article = response;
	});
};

refresh();

$scope.addArticle = function(){
	console.log($scope.articlet);
	$http.post('/article', $scope.article).success(function(response){
		console.log(response);
		//refresh();
	});
};

$scope.removeArticle = function(id){
	console.log(id);
	$http.delete('/article/' + id).success(function(response){
		refresh();
	});
};

$scope.updateArticle = function(){
	console.log($scope.article._id);
	$http.put('/article/' + $scope.article._id, $scope.article).success(function(response){
		refresh();
	})
};

$scope.deselect = function(){
	$scope.article = "";
};

$scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';

function NewVue($scope){
	console.log("Controleur de vue, Scope: "+$scope);
	//this.$route = $route;
    //this.$location = $location;
    //this.$routeParams = $routeParams;

}

});