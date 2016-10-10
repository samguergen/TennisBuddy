angular
    .module('myApp', ['ui.tree'])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      console.log('init main ng controller');
      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.showProfile = false;
      $scope.lookingToPlay = false;
      $scope.openGameForm = true;

      $scope.reloadRoute = function(endpoint) {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = '/'+ endpoint;
      }

      $scope.sendMessage = function(){
      }

    }]);