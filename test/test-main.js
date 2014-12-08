var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// var pathToModule = function(path) {
//   return path.replace(/^\/base\//, '').replace(/\.js$/, '');
// };

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(file);
  }
});

console.log(allTestFiles);
requirejs.config({
    baseUrl:'base/src',
    paths:{
      jquery:'../lib/jquery/dist/jquery',
      angular: '../lib/angular/angular',
      uiRouter:'../lib/angular-ui-router/release/angular-ui-router',
      uiBootstrap:'../lib/angular-bootstrap/ui-bootstrap',
      underscore:'../lib/underscore/underscore',
      app: 'app',
      controllers:'components/controllers',
      directives:'components/directives',
      services:'components/services',
      templates:'components/templates',
      start: 'index'
    },

    //These shims are needed to ensure the angular modules
    //load correctly in the browser
    shim:{
      'angular': {
        deps:['jquery'],
        exports: 'angular'
      },
      'uiRouter': {
        deps: ['angular']
      },
      'uiBootstrap': {
        deps:['angular']
      }
    },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
