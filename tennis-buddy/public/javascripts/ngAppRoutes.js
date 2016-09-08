angular.module('tennisBuddy')
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../ng-templates/home.ejs',
      controller: 'MainCtrl'
    })

    .state('games', {
      url: '/games/{id}',
      templateUrl: '../ng-templates/game.ejs',
      controller: 'GamesCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);