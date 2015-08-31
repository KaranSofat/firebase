// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var firebaseUrl = "https://sizzling-inferno-3944.firebaseio.com";
angular.module('starter', ['ionic','firebase','angularMoment','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.constant('ApiEndpoint', {
  url: 'https://blazing-fire-2739.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  
   .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'login'
    })
    
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html",
      controller: 'register'
    })
    .state('users', {
      url: "/users",
      templateUrl: "templates/users.html",
      controller: 'users'
    })
    .state('createRoom', {
      url: "/createRoom",
      templateUrl: "templates/createRoom.html",
      controller: 'createRoom'
    })
    .state('online', {
      url: "/online",
      templateUrl: "templates/online.html",
      controller: 'online'
    })
    
    .state('startChat', {
      url: "/startChat/:id",
      templateUrl: "templates/startChat.html",
      controller: 'startChat'
    })
    
    
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "templates/dashboard.html",
      controller: 'dashboard'
    })
    .state('viewUser', {
      url: "/viewUser/:id",
      templateUrl: "templates/viewUser.html",
      controller: 'viewUser'
    });
 $urlRouterProvider.otherwise('/login');

});
