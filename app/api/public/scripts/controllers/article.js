'use strict';
//doc for dialog: https://github.com/m-e-conroy/angular-dialog-service  , $http, dialogs
//
  //angular.module('caballoApp')
  angular.module('caballoApp')
.controller('ArticleCtrl', function($scope, $http, dialogs) {

	//console.log("Hello from controller articleCtrl")

var refresh = function(){
$http.get('/article').success(function(response){
	console.log(response);
	$scope.articlelist = response;
	var list = $scope.articlelist;
	$scope.article = "";
	  $scope.totalItems = $scope.articlelist.length;
      $scope.currentPage = 1;
      $scope.itemsPerPage = 6;
      $scope.maxSize = 4; //Number of pager buttons to show

      for ( var i = 0; i < list.length; i++) {
  // Ceci sera exécuté 5 fois
  // la variable "pas" ira de 0 à 4
  //$scope.
  var art_date = new Date();
  art_date = list[i].created_at;
  //var c_annnees = list[i].created_at.getYear(); 
  //var c_mois = list[i].created_at.getMonth();
  if (list[i].created_at)
  {

  }
  console.log("article id: "+list[i]._id);
  console.log("date de création: "+art_date);
}
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

};


        //pagination
        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            //console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first paghe
        }

});