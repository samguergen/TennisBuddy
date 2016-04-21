angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        }) // make sure you remove the semicolon
        .state('test', {
            url: '/',
            templateUrl: 'test.html',
            controller: 'HomeCtrl'
        }) // make sure you remove the semicolon

        // an abstract state that just serves as a
        // parent for the below child states
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'dashboard/layout.html'
        })
            // the default route when someone hits dashboard
            .state('dashboard.one', {
                url: '',
                templateUrl: 'dashboard/one.html'
            })
            // this is /dashboard/two
            .state('dashboard.two', {
                url: '/two',
                templateUrl: 'dashboard/two.html'
            })
            // this is /dashboard/three
            .state('dashboard.three', {
                url: '/three',
                templateUrl: 'dashboard/three.html'
            });

          });

