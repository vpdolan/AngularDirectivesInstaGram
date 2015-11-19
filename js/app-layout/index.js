import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';

import HomeController from './controllers/home.controller';
import HomeService from './controllers/home.service';


angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  .directive('homePage', homePage)
;

function homePage (HomeService) {
  return {
    restrict: 'EA',
    replace: true,
    scope {
      p: '=photo'
    },

    template: `
      <div class='picSet' ng-dblclick='vm.likes'
      <h3>{{ p.title}}</h3>
      p id="icon" class="fa fa-heart" ng-hide=""
      //ng-remove?
      <img src={{ p.url }}>
      <h4>{{ p.caption }}</h4>Likes: 

      </div>`

      controller: 'HomeController as vm',
      link: function (scope, element, attrs) {


      }
   }
}


// AngularButton Code
// let MyController = function ($scope) {
  
//   $scope.count= 0;
//   $scope.message = 'LIKES';

//   $scope.incrementByOne = function () {
  
//     $scope.count = $scope.count + 1;

//     $scope.message = ($scope.count === 1) ? 'LIKE' : 'LIKES';

//   };

// };