angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates',
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        }) // make sure you remove the semicolon
        .state('signup', {
            url: '/signup',
            templateUrl: 'signup.html',
            controller: 'HomeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'HomeCtrl'
        })
        .state('past-games', {
            url: '/past-games',
            templateUrl: 'past-games.html',
            controller: 'HomeCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'profile.html',
            controller: 'HomeCtrl'
        })
        .state('browse', {
            url: '/browse',
            templateUrl: 'browse.html',
            controller: 'HomeCtrl'
        })
        .state('new-game', {
            url: '/new-game',
            templateUrl: 'new-game.html',
            controller: 'HomeCtrl'
        })
        // .state('dashboard', {
        //     abstract: true,
        //     url: '/dashboard',
        //     templateUrl: 'dashboard/layout.html'
        // })
        //     // the default route when someone hits dashboard
        //     .state('dashboard.one', {
        //         url: '/one',
        //         templateUrl: 'dashboard/one.html'
        //     })
        //     // this is /dashboard/two
        //     .state('dashboard.two', {
        //         url: '/two',
        //         templateUrl: 'dashboard/two.html'
        //     })
        //     // this is /dashboard/three
        //     .state('dashboard.three', {
        //         url: '/three',
        //         templateUrl: 'dashboard/three.html'
        //     })

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

    })

.run(function() {
  console.log('angular app running');
});
