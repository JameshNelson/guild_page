angular.module('appG', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    templateUrl:'home/home.html',
    controller:'homeCtrl',
    url:'/'
  })
  .state('roster', {
    templateUrl: 'roster/roster.html',
    controller: 'rosterCtrl',
    url:'/roster'
  })
  .state('calander', {
    templateUrl: 'calander/calander.html',
    controller: 'calanderCtrl',
    url:'/calander'
  })




})
