(function() {

  angular
    .module('caballoApp')
    .directive('navigation', navigation);

  function navigation() {
    return {
      restrict: 'EA',
      templateUrl: 'common/directives/navigation/navigation.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();