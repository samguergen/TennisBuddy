angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){

      console.log('init main ng controller');
      console.log('angular installed? ', angular);

      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.showProfile = false;
      $scope.lookingToPlay = false;
      $scope.openGameForm = true;
      // $scope.game.coordinates = false;

      console.log('vars are ', $scope.showLogin, $scope.showProfile, $scope.showProfile);

      $scope.reloadRoute = function(endpoint) {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = endpoint;
      }

      $scope.initialize = function(coor) {
        console.log('inside initialize in show page');
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

      $scope.get_coords = function(address) {
        console.log('inside get_coords func');
        console.log('address is ', address);
        var gc      = new google.maps.Geocoder(),
            opts    = { 'address' : address };

        gc.geocode(opts, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {   
                var loc     = results[0].geometry.location,
                    lat     = loc.$a,
                    long    = loc.ab;

                // Success.  Do stuff here.
                console.log('lat/longs are ', loc, lat);
                console.log('success');
            }
            else {
                // Ruh roh.  Output error stuff here
                console.log('error');
            }
        });
    }

    $scope.getCoords = function(address, townCountry){
      // console.log('address is ', address);
      var slugAddress = address.replace(/ |,/g , '+');
      var slugTownCountry = townCountry.replace(/ |,/g , '+');
      var allSlug = slugAddress + ',' + slugTownCountry;
      console.log('allSlug is ', allSlug);
      var apiEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + allSlug + '&key=YOUR_API_KEY'
      console.log('api endpoint is ', apiEndpoint);

      $http.post('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY')

    }

    }]);