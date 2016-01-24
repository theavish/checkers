app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'pages/game.html'
    });

  $urlRouterProvider.otherwise('/');

});
