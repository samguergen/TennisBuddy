angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location){
      $scope.showLogin = false;
      $scope.showSignup = false;

    }]);