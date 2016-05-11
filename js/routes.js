angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('newsCategories.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('localNews', {
    url: '/local',
    templateUrl: 'templates/localNews.html',
    controller: 'localNewsCtrl'
  })

  .state('businessNews', {
    url: '/business',
    templateUrl: 'templates/businessNews.html',
    controller: 'businessNewsCtrl'
  })

  .state('newsCategories', {
    url: '/side-menu21',
    templateUrl: 'templates/newsCategories.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});