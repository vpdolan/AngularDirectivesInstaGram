import angular from 'angular';

import AddController from './controllers/add.controller';
import PARSE from '..app.core/constants/parse.constant';

angular
  .module('app.photos', [])
  .controller('AddController', AddController)
  .directive('addPhoto', addPhoto)
  .constant('PARSE', PARSE)
  ;

  function addPhoto () {
    return {

      restrict: 'EA',
      replace: true,
      scope: {
        addPic: '='

      },

      template: `
        <div class="addPics">
          <h3>Add a Photo</h3>
          <form ng-submit="vm.addPic(gram)>"
          <input type="text" ng-model="gram.url" placeholder="Photo URL">
          <input type="text" ng-model="gram.title" placeholder="Photo Title">
          <input type="text" ng-model="gram.caption" placeholder="Photo Caption">
          <button>Add</button>
          </form>
        </div>
        `
      controller: 'AddController as vm'   
     }

  }
  