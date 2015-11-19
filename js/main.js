import angular from 'angular';

import $ from 'jquery';

console.log('Hello, World');
// Import our core files

// Import our sub modules
import './app-core/index';
import './app-layout/index';
import './app-photos/index';


angular
  .module('app', ['app.core', 'app.layout', 'app.photos'])
;