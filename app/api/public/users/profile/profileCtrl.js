'use strict';


(function() {
	angular
		.module('caballoApp')
		.controller('profileCtrl', profileCtrl);
	profileCtrl.$inject = ['$location', 'authentication'];



	function profileCtrl($location, authentication) {
		var vmp = this;

		vmp.currentPath = $location.path();

		vmp.isLoggedIn = authentication.isLoggedIn();

		vmp.currentUser = authentication.currentUser();



	}

})();