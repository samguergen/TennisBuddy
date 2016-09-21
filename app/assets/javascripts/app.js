angular
    .module('myApp', ['ui.router'])
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

      $scope.reloadRoute = function() {
        console.log("inside reloadroute");
         $window.location.reload();
         $window.location.href = '/games'
      }

      $scope.openGameFo = function(){

      }

      var arr = ["1,John,", "2,Warwick,1", "3,Jessica,1", "4,Thor,8", "5,Bobby,6", "6,Hank,15", "7,Maria,15", "8,Bruce,", "9,Alfred,8", "10,Gene,", "11,India,12", "12,Karen,", "13,Sandy,12", "14,Max,11", "15,Lex,8", "16,George,12", "17,JarJar,16", "18,Roger,2", "19,Archer,4", "20,Bianca,1", ""];

//var arr = $scope.data.split("\n");

//turn data into 2D array and replace last value into int for sorting.
  $scope.init = function(){
    $scope.arr2D = [];
    var splat = [];
    for (var i in arr){
      splat = arr[i].split(",");
      if (splat[2] == ""){ splat[2] = 0}
      else {splat[2] = parseInt(splat[2])};
      $scope.arr2D.push(splat);
    };

    // sorts 2D array per last digit for ul tabbing
    $scope.sorted = $scope.arr2D.sort(compareLastColumn);

    function compareLastColumn(a, b) {
      if (a[2] === b[2]) {
          return 0;
      }
      else {
          return (a[2] < b[2]) ? -1 : 1;
      }
    }

  }

  $scope.init();


    }]);