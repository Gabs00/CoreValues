requirejs.config({
  baseUrl:'lib',
  paths:{
    src: '../src',
    //partials:'../partials',
    jquery:'jquery/dist/jquery',
    angular: 'angular/angular',
    underscore:'underscore/underscore',
    app: '../src/app',
    controllers:'../src/components/controllers',
    directives:'../src/components/directives',
    services:'../src/components/services',
    templates:'../src/components/templates'
  },
  shim:{
    'angular': {
      deps:['jquery'],
      exports: 'angular'
    }
  },
  deps:['jquery','angular', 'underscore']
});

require(['src/index']);
