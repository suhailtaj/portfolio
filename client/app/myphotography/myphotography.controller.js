(function(){
  'use strict';

  angular
    .module('app.home')
    .controller('myphotographyCtrl', myphotographyCtrl);

    myphotographyCtrl.$inject = ['$http'];

    function myphotographyCtrl($http){

      var self = this;
      self.service = null;

      init();

      function init(){
        console.log("my photography page")
      }
    }

})();
