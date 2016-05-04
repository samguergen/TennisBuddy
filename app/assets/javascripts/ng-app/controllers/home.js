angular.module('myApp')
.controller('HomeCtrl', ['$scope', function($scope){
  console.log('inside the controller');

  $scope.afterLog = true;

  console.log('afterlog is ', $scope.afterLog);

  $scope.positionObj = {};

  $scope.map = { center: { latitude: 25, longitude: -73 }, zoom: 8 };

  $scope.submitLocation = function(location) {
    console.log('location is ', location);
  };

  $scope.user = {
    'id': 1,
    'cryptId': "1xx",
    'firstName': "Miss",
    'lastName': "Nobody",
    'description': "Some cool hacker chick",
    'email':"miss@nbd.com",
    'password':"123",
    'games': []
  };

  $scope.tabs = {
    'home':'active',
    'profile':'deactivated',
    'past':'deactivated',
    'browse':'deactivated',
    'login':'deactivated',
    'newGame':'deactivated'
  };

  $scope.newGame = {
    'id': 1,
    'creator': "Sam",
    'player 1': "Sam",
    'player 2': "stupid",
    'score': '10-6',
    'winner': 'Sam',
    'location': 'Williamsburg Sports Center',
    'description': 'Who wants to play with me this morning?',
    'comments': [{'melanie': 'nice game!'}, {}]
  };

  $scope.requests = [
    'request 1',
    'request 2',
    'request 3',
    'request 4',
    'request 5',
  ];

  $scope.showEditForm = false;

  $scope.showPopOver = function() {
    // $scope.popOverIsVisible = true;
    console.log('working!');
  };

  $scope.hidePopOver = function() {
    $scope.popOverIsVisible = false;
    console.log('pop over hiding');
  };

  $scope.editProfile = function() {
    $scope.showEditForm = true;
  };

  $scope.submitEditProfile = function() {
    console.log($scope.user);
  };

  $scope.locate = function() {
    console.log('is lat long working?');
    console.log($scope.positionObj);
    // console.log(this.test);
              };


  $scope.usr = {
    "email" : "",
    "password" : "",
  }



//TODO: implement timeout on geolocation

    // var options = {
    //               enableHighAccuracy: true
    //           };

    // navigator.geolocation.getCurrentPosition(function(pos) {
    //               $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    //               $scope.positionObj = JSON.stringify($scope.position);
    //               console.log('your current longitude and latitudes are....');
    //               console.log($scope.positionObj);
    //               alert($scope.positionObj);
    //           },
    //           function(error) {
    //               alert('Unable to get location: ' + error.message);
    //           }, options);

}]);