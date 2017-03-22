(function(){
  'use strict';

  angular
    .module('app.home')
    .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$http'];

    function aboutCtrl($http){

      var self = this;
      self.service = null;

      init();

      function init(){
        console.log("about page")
      }
    }

})();
