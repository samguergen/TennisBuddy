angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location){
      console.log('init main ng controller');
      $scope.showLogin = false;
      $scope.showSignup = false;

    }]);