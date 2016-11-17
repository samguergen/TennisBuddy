angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      console.log('init main ng controller');

      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.showProfile = false;
      $scope.lookingToPlay = false;
      $scope.openGameForm = true;

      console.log('vars are ', $scope.showLogin, $scope.showProfile, $scope.showProfile);

      $scope.reloadRoute = function(endpoint) {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = endpoint;
      }

    }]);