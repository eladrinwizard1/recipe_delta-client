angular.module('app.routes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/search');

    $stateProvider

      .state('search', {
          url: '/search',
          views: {
            "main": {
              templateUrl: 'pages/search.html',
              controller: 'searchCtrl'
            }
          }
      })
  })
