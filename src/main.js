requirejs.config({
  baseUrl:'src',
  paths:{
    jquery:'../lib/jquery/dist/jquery',
    angular: '../lib/angular/angular',
    uiRouter:'../lib/angular-ui-router/release/angular-ui-router',
    uiBootstrap:'../lib/angular-bootstrap/ui-bootstrap',
    ngTouch: '../lib/angular-touch/angular-touch',
    underscore:'../lib/underscore/underscore',
    app: 'app',
    controllers:'components/controllers',
    directives:'components/directives',
    services:'components/services',
    templates:'components/templates'
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
    },
    'ngTouch': {
      deps:['angular']
    }
  },
  deps:['jquery','angular', 'underscore']
});

require(['index']);
