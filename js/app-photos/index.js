import angular from 'angular';
import '../app-core/index';

import AddController from './controllers/add.controller';
import PhotoService from './services/photo.service';
import vinImage from './directives/photo.directive';

angular
  .module('app.photos', ['app.core'])
  .controller('AddController', AddController)
  .directive('vinImage', vinImage)
  .service('PhotoService', PhotoService)
  ;

       
     

  
  