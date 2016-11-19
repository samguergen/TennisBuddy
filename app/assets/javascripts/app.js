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
      $scope.game = {title: "", description: "", player_1: "", address: "", townCountry: "", coordinates: ""};

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
      // console.log('userInput and ngmodel are ', userInput, $scope.game);
      // $scope.getLatLng(userInput.address, userInput.townCountry);
      $scope.getLatLng(userInput);
    }


    $scope.getLatLng = function(userInput) {
      var slugAddress = userInput.address.replace(/ |,/g , '+');
      var slugTownCountry = userInput.townCountry.replace(/ |,/g , '+');
      var allSlug = slugAddress + ',' + slugTownCountry;
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode( { 'address': allSlug}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        $scope.lat = latitude;
        $scope.lng = longitude;
        console.log('latitude is ', latitude, 'lng is ', longitude);
        $scope.latLng = latitude + ", " + longitude;
        console.log('scope.latLng is ', $scope.latLng);
        // var gamePostObj = {title: $scope.game.title, description: $scope.game.description, player_1: $scope.game.player_1, coordinates: $scope.latLng.toString()};
        var gamePostObj = {title: userInput.title, description: userInput.description, player_1: userInput.player_1, coordinates: $scope.latLng.toString()};
        console.log('game post obj is ', gamePostObj);
        } 
      }); 
    }


    // $scope.getLatLng = function(address, townCountry) {
    //   var slugAddress = address.replace(/ |,/g , '+');
    //   var slugTownCountry = townCountry.replace(/ |,/g , '+');
    //   var allSlug = slugAddress + ',' + slugTownCountry;
    //   var geocoder = new google.maps.Geocoder();

    //   geocoder.geocode( { 'address': allSlug}, function(results, status) {

    //   if (status == google.maps.GeocoderStatus.OK) {
    //     var latitude = results[0].geometry.location.lat();
    //     var longitude = results[0].geometry.location.lng();
    //     $scope.lat = latitude;
    //     $scope.lng = longitude;
    //     console.log('latitude is ', latitude, 'lng is ', longitude);
    //     $scope.latLng = latitude + ", " + longitude;
    //     console.log('scope lat lng is ', $scope.latLng);
    //     } 
    //   });
    //   // return $scope.latLng;
    //   // console.log('scope lat lng is ', $scope.latLng);
    //   var gamePostObj = {title: $scope.game.title, description: $scope.game.description, player_1: $scope.game.player_1, coordinates: $scope.latLng.toString()};
    //   console.log('game post obj is ', gamePostObj);
    // }

    $scope.createGameReq = function(newGame){
      console.log('inside sendGameReq');
      console.log(newGame);
      $http({
        method: 'POST',
        url: 'http://localhost:3000/games',
        data: newGame,
        // data: {'game': {'name': 'John Smith', 'message': 'Hello'}},
        headers: {'Content-Type': 'application/json'}
      }).then(function mySucces(response) {
        $scope.myResponse = response.data;
        console.log('response is ', response.data);
      }, function myError(response) {
        $scope.theError = response.statusText;
      });
    }

    }]);