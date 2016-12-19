angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){
       $http.defaults.headers.common["X-Requested-With"];
      $scope.lookingToPlay = false;
      $scope.openGameForm = true;

      $scope.tabArray = [
        {showLogin: false},
        {showSignup: false},
        {showProfile: false},
      ];
      $scope.game = {
        title: "", 
        description: "", 
        player_1: "", 
        address: "", 
        townCountry: "", 
        coordinates: ""
      };
      $scope.score = {
        player_1: {name: "player_1", first: 0, second: 0, third: 0, total: 0},
        player_2: {name: "player_2", first: 0, second: 0, third: 0, total: 0},
        winner: "",
      }

     $scope.previewFile = function(){
      var preview = document.querySelector('img'); //selects the query named img
      var file    = document.querySelector('input[type=file]').files[0]; //sames as here
      var reader  = new FileReader();

      reader.onloadend = function () {
         preview.src = reader.result;
         console.log('preview src is ');
         console.log(preview.src);
      }

      if (file) {
         reader.readAsDataURL(file); //reads the data as a URL
         console.log('file is ');
         console.log(file);
      } 
      else {
         preview.src = "";
        }
      }

      $scope.navToggle = function(clickedTab){
        var tabVal = Object.values($scope.tabArray);
        for (var i in tabVal){
          $scope.tabArray[i] = false;
        }
        $scope.tabArray[clickedTab] = !$scope.tabArray[clickedTab];
      }

      $scope.addScore = function(){
        $scope.score.player_1.total = parseInt($scope.score.player_1.first) + parseInt($scope.score.player_1.second) + parseInt($scope.score.player_1.third);
        $scope.score.player_2.total = parseInt($scope.score.player_2.first) + parseInt($scope.score.player_2.second) + parseInt($scope.score.player_2.third);

        if ( parseInt($scope.score.player_1.total) > parseInt($scope.score.player_2.total) ) {
          $scope.score.winner = $scope.score.player_1.name;
        }
        else if ( parseInt($scope.score.player_1.total) < parseInt($scope.score.player_2.total) ) {
          $scope.score.winner = $scope.score.player_2.name;
        }

      }

      $scope.persistScore = function() {
        var hostUrl = $window.location.origin + "/addscore";
        $http({
          method: 'POST',
          url: hostUrl,
          data: {score: $scope.score},
          headers: {'Content-Type': 'application/json'}
        }).then(function mySucces(response) {
          $scope.myResponse = response.data;
        }, function myError(response) {
          $scope.theError = response.statusText;
          console.log(response.statusText);
        });
      }

      $scope.reloadRoute = function(endpoint) {
          console.log('endpoint is ', endpoint);
         // $window.location.reload();
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
        $scope.latLng = latitude + ", " + longitude;
        var gamePostObj = {title: userInput.title, description: userInput.description, player_1: userInput.player_1, coordinates: $scope.latLng.toString()};
        console.log('game post obj is ', gamePostObj);

        $scope.createGameReq(gamePostObj);
        } 
      }); 
    }

    $scope.createGameReq = function(gamePostObj){
      var hostUrl = $window.location.origin + "/games";
      $http({
        method: 'POST',
        url: hostUrl ,
        data: gamePostObj,
        headers: {'Content-Type': 'application/json'}
      }).then(function mySucces(response) {
        $scope.myResponse = response.data;
      }, function myError(response) {
        $scope.theError = response.statusText;
      });
    }

    $scope.activateFooter = function(){
      console.log('inside activateFooter func');
       // $('head').append('<link rel="stylesheet" href="custom-footer.scss" type="text/css" />');
       $('footer').css({'margin-top': '500px'});
    }

    }]);