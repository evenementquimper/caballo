'use strict';
//doc for dialog: https://github.com/m-e-conroy/angular-dialog-service
angular.module('mytodoApp')
  .controller('ArticleCtrl', function($scope, $http, Todo, dialogs) {

	console.log("Hello from controller articleNgApp");

	
var refresh = function(){
$http.get('/article').success(function(response){
	//console.log("Data");
	$scope.articlelist = response;
	$scope.article = "";
});
};

refresh();

$scope.addArticle = function(){
	console.log($scope.articlet);
	$http.post('/article', $scope.article).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.removeArticle = function(id){
	console.log(id);
	$http.delete('/article/' + id).success(function(response){
		refresh();
	});
};

$scope.editArticle = function(id){
	console.log(id);
	$http.get('/article/' + id).success(function(response){
		$scope.article = response;
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
//$scope.contactlist = contactlist;

function NewVue($scope){
	console.log("Controleur de vue, Scope: "+$scope);
	//this.$route = $route;
    //this.$location = $location;
    //this.$routeParams = $routeParams;

}

});