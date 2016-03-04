'use strict';
//doc for dialog: https://github.com/m-e-conroy/angular-dialog-service  , $http, dialogs
//
  //angular.module('caballoApp')  , authentication
  angular.module('caballoApp')
.controller('OneArticleCtrl', function($scope, $http, dialogs, $routeParams, Upload, $window, $location, authentication) {


var refresh = function(){
		//console.log("ID: "+$routeParams._id);
	$http.get('/article/' + $routeParams._id).success(function(response){
		$scope.article = response;
       // console.log("SCOPE article image: "+$scope.article.image);
	});
};

refresh();

$scope.addArticle = function(){
	console.log($scope.articlet);
	$http.post('/article', $scope.article).success(function(response){
		console.log(response);
        $window.alert('Article Ajouter');
		refresh();
	});
};

$scope.removeArticle = function(id){
	console.log(id);
    $window.alert('Attention tu supprime l article !!');
	$http.delete('/article/' + id).success(function(response){
		refresh();
	});
};

$scope.updateArticle = function(){
	console.log($scope.article._id);
	$http.put('/article/' + $scope.article._id, $scope.article).success(function(response){
        $window.alert('Article à jour');
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

///////////////////////////Upload////////////////////////////////

    $scope.upload = function(file) {
        console.log('datafile', file);
        $scope.article.image = file.name;
        Upload.upload({
            url: 'http://82.245.202.35:3000/api/upload', //webAPI exposed to upload the file
            data: {
                file: file 
            } //pass file as data, should be user ng-model

        }).then(function(resp) { //upload function returns a promise
            if (resp.data.error_code === 0) { //validate success
                $window.alert('Success ' + resp.config.data.file.name + ' uploaded.');
                //console.log('RespConfig' + resp);

                //$http.put('/api/adverts/' + $scope.advert._id, $scope.advert).success(function(response) {
                  //  console.log('currentId2: ', $scope.advert._id);
                //});
            } else {
                $window.alert('an error occured');
            }
        }, function(resp) { //catch error
            //console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function(evt) {
            //console.log('evt', evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
           // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
           // console.log('configData ', evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });

    };



/////////////////////////////////////////////////////////////////

///////////////////////////DatePicker////////////////////////////

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
/////////////////////////////////////////////////////////////////


/////////////////////////////Auth////////////////////////////////


        //var vm = this;

        //vm.currentPath = $location.path();

        $scope.isLoggedIn = authentication.isLoggedIn();

        //vm.currentUser = authentication.currentUser();

        //vm.logout = function() {
          //  authentication.logout();
            //$location.path('/');
        //};

        //vm.page = $location.path();
/////////////////////////////////////////////////////////////////
});


