(function () {
  'use strict';

  angular
    .module('app.home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl as vm'
      })
      .state('about', {
        url: '/About',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl as vm',
      })
      .state('myphotography', {
        url: '/Photography',
        templateUrl: 'app/myphotography/myphotography.html',
        controller: 'myphotographyCtrl as vm',
      })
      .state('contact', {
        url: '/Contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'contactCtrl as vm',
      });
  }

})();