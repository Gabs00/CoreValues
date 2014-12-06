var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  paths:{

    //partials:'../partials',
    jquery:'lib/jquery/dist/jquery',
    angular: 'lib/angular/angular',
    underscore:'lib/underscore/underscore',
    app: 'src/app',
    controllers:'src/components/controllers',
    directives:'src/components/directives',
    services:'src/components/services',
    templates:'src/components/templates'
  },
  shim:{
    'angular': {
      deps:['jquery'],
      exports: 'angular'
    }
  },
  deps:['jquery','angular', 'underscore'].concat(allTestFiles),

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
