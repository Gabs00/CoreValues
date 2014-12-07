requirejs.config({
  baseUrl:'src',
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
    templates:'components/templates'
  },
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
  deps:['jquery','angular', 'underscore']
});

require(['index']);
