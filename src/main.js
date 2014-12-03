requirejs.config({
  baseUrl:'lib',
  paths:{
    src: '../src',
    //partials:'../partials',
    jquery:'jquery/dist/jquery',
    angular: 'angular/angular',
    _:'underscore/underscore',
    app: '../src/app',
    controllers:'../src/components/controllers',
    directives:'../src/components/directives',
    services:'../src/components/services'
  },
  shim:{
    'angular': {
      deps:['jquery'],
      exports: 'angular'
    }
  },
  deps:['jquery','angular', '_']
});

require(['src/index']);
