(function() {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/',
          templateUrl: 'app/home/home.view.html',
          controller: 'HomeController',
          controllerAs: 'vm',
          title: 'Home',
          settings: {
            nav: 1,
            content: '<i class="fa fa-lock"></i> Home'
          }
        }
      }
    ];
  }
})();