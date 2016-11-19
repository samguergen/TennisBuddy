angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){
       $http.defaults.headers.common["X-Requested-With"];

      console.log('angular installed? ', angular);

      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.showProfile = false;
      $scope.lookingToPlay = false;
      $scope.openGameForm = true;
      // $scope.game = {};
      $scope.game = {title: "", description: "", player_1: "", address: "", townCountry: "", coordinates: ""};

      // console.log('vars are ', $scope.showLogin, $scope.showProfile, $scope.showProfile);

      $scope.reloadRoute = function(endpoint) {
         $window.location.reload();
         $window.location.href = endpoint;
      }

      $scope.initialize = function(coor) {
        var uluru = {lat: parseFloat(coor[0]), lng: parseFloat(coor[1])};
        console.log(uluru);
        var map = new google.maps.Map(document.getElementById('showmap'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


    $scope.createGame = function(userInput) {
      console.log('userInput is ', userInput);
      alert('userInput is ', userInput);
      console.log('game from ngModel is ', $scope.game);
      console.log('description is ', $scope.game.description);
    }

    // $scope.getCoords = function(address, townCountry){
    //   var slugAddress = address.replace(/ |,/g , '+');
    //   var slugTownCountry = townCountry.replace(/ |,/g , '+');
    //   var allSlug = slugAddress + ',' + slugTownCountry;
    //   var apiEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + allSlug + '&key=AIzaSyC5TZNWeG6UJI4Gw8fTsaaHkd3rV7Qy5p8'
    //   console.log('api endpoint is ', apiEndpoint);

    //   // $http.post(apiEndpoint)

    // }

    $scope.getLatLng = function(address, townCountry) {
      var slugAddress = address.replace(/ |,/g , '+');
      var slugTownCountry = townCountry.replace(/ |,/g , '+');
      var allSlug = slugAddress + ',' + slugTownCountry;
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode( { 'address': allSlug}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        $scope.lat = latitude;
        $scope.lng = longitude;
        console.log('latitude is ', latitude, 'lng is ', longitude);
        } 
      });
      $http({
            method: 'POST',
            url: 'http://localhost:3000/game',
            data: game,
            // data: {'game': {'name': 'John Smith', 'message': 'Hello'}},
            headers: {'Content-Type': 'application/json'}
        }).then(function mySucces(response) {
        $scope.myResponse = response.data;
        console.log('response is ', response.data);
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });

    }

    }]);