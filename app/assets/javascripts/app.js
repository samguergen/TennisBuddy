angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      console.log('init main ng controller');
      console.log('angular installed? ', angular);

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

      $scope.initialize = function(coor) {
        console.log('inside initialize in show page');
        console.log('real coords are ');
        console.log(coor);
        var uluru = {lat: coor, lng: coor};
        // var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('showmap'), {
          // zoom: 4,
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

    }]);