angular
    .module('myApp', ['ui.router'])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      console.log('init main ng controller');
      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.desiredLoc = "";
      $scope.openGameForm = true;

      $scope.reloadRoute = function() {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = '/games'
      }

      $scope.openGameFo = function(){

      }






    }]);