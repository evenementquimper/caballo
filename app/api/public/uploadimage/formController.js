'use strict';

angular.module('caballoApp')

.controller('MyCtrl', ['$scope', '$http', 'Upload', '$window', function($scope, $http, Upload, $window) {
    var vm = this;

    vm.submit = function() { //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
            //                vm.updateAdvert(resp);
            console.log('scope-ctrl-input', $scope.up.upload_form.file);
            //               console.log('scooop :',vm.upload_form.file); 
            console.log('file-name-origin :', $scope.up.file.name); // = vm.file
        }
    };

    vm.upload = function(file) {
        console.log('datafile', file);
        Upload.upload({
            url: 'http://localhost:3000/api/adverts/upload', //webAPI exposed to upload the file
            data: {
                file: file
            } //pass file as data, should be user ng-model

        }).then(function(resp) { //upload function returns a promise
            if (resp.data.error_code === 0) { //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                console.log('RespConfig' + resp);

                $http.put('/api/adverts/' + $scope.advert._id, $scope.advert).success(function(response) {
                    console.log('currentId2: ', $scope.advert._id);
                });
            } else {
                $window.alert('an error occured');
            }
        }, function(resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function(evt) {
            console.log('evt', evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            console.log('configData ', evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });

    };


}]);