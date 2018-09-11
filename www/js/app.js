// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menus.html'
  })



  // Each tab has its own nav history stack:

  .state('menu.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/main.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('menu.member', {
    url: '/member',
    views: {
      'tab-member': {
        templateUrl: 'templates/member.html',
        controller: 'DashCtrl'
      }
    }
  })


.state('menu.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/howto.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('menu.Contact', {
    url: '/Contact',
    views: {
      'tab-Contact': {
        templateUrl: 'templates/Contact.html',
        controller: 'DashCtrl'
      }
    }
  })



.state('menu.create', {
    url: '/create',
    views: {
      'tab-create': {
        templateUrl: 'templates/create.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('main', {
    url: '/main',
    
        templateUrl: 'templates/main.html',
        controller: 'DashCtrl'
      
    
  })


  .state('member', {
    url: '/member',
    
        templateUrl: 'templates/member.html',
        controller: 'DashCtrl'
      
    
  })


  .state('howto', {
    url: '/howto',
    
        templateUrl: 'templates/howto.html',
        controller: 'DashCtrl'
      
    
  })

  .state('Contact', {
    url: '/Contact',
    
        templateUrl: 'templates/Contact.html',
        controller: 'DashCtrl'
      
    
  })

   .state('create', {
    url: '/create',
    
        templateUrl: 'templates/create.html',
        controller: 'DashCtrl'
      
    
  })



.state('user1', {
      url: '/menu/member/user1',
        templateUrl: 'templates/user1.html', 
  })
.state('user2', {
      url: '/menu/member/user2',
        templateUrl: 'templates/user2.html', 
  })
.state('user3', {
      url: '/menu/member/user3',
        templateUrl: 'templates/user3.html', 
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/main');

});