angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location){
      $scope.intro = "Angular is working";
     // alert('inside angular ctrl');

      $scope.openLoginBox = function(){

      }
    }]);