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
        var coords = [40.78694, -73.97528];
        console.log('inside initMap in show page');
        console.log(coords);
        console.log('real coords are ', coor);
        var uluru = {lat: coords[0], lng: coords[1]};
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