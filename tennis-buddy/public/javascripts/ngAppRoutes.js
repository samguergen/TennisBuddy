angular.module('tennisBuddy')
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../ng-views/home.ejs',
      controller: 'MainCtrl'
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '../ng-views/post.ejs',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);