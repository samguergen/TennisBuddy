angular
    .module('myApp', ['ui.tree'])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      console.log('init main ng controller');
      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.desiredLoc = "";
      $scope.openGameForm = true;

      $scope.startModal = function(order){
        var modal, btn, span;

        if (order == 1){
          console.log('inside order 1', order);
          modal = document.getElementById('myModal');
          btn = document.getElementById("myBtn");
          span = document.getElementsByClassName("close")[0];
        }
        else if(order == 2){
          console.log('inside order 2', order);
          modal = document.getElementById('mySecondModal');
          btn = document.getElementByClassName("submit-location")[0];
          span = document.getElementsByClassName("secondClose")[0];
        }
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

      }

      $scope.closeModal = function() {
            var modal = document.getElementById('myModal');
            modal.style.display = "none";
        }

      $scope.reloadRoute = function(endpoint) {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = '/'+ endpoint;
      }

      $scope.openGameFo = function(){

      }

    }]);