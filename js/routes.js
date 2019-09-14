angular.module('app.routes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/splash');

    $stateProvider

      .state('search', {
          url: '/search',
          views: {
            "main": {
              templateUrl: 'pages/search.html',
              controller: 'searchCtrl as s'
            }
          }
      })

      .state('splash', {
          url: '/splash',
          views: {
            "main": {
              templateUrl: 'pages/splash.html',
              controller: 'splashCtrl as splash'
            }
          }
      })

      .state('future', {
          url: '/future',
          views: {
            "main": {
              templateUrl: 'pages/future.html',
              controller: 'futureCtrl as future'
            }
          }
      })
  })
