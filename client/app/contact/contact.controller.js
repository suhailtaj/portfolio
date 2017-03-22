(function(){
  'use strict';

  angular
    .module('app.home')
    .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$http'];

    function contactCtrl($http){

      var self = this;
      self.service = null;

      init();

      function init(){
        console.log("contact page")
      }
    }

})();
