let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
    abstract: true,
    templateUrl: 'templates/app-layout/layout.tpl.html'

    })

    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })   

    .state('root.add', {
      url: '/image/add',
      controller: 'AddController as vm',
      templateUrl: 'templates/app-photos/addPhoto.tpl.html'
    })    

};


config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;