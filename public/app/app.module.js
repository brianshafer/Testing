(function() {

  var module = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'strformat',
    'jsend',
    'app.search',
    'app.email',
    'app.help'
  ]);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'app/shared/header.html'
          },
          'footer@': {
            templateUrl: 'app/shared/footer.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

  module.config(config);
})();
