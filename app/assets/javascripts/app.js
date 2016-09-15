angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location){
      $scope.showLogin = false;
     // alert('inside angular ctrl');

      $scope.openLoginBox = function(){

      }
    }]);