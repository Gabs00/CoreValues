define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('home.html',
        [
          '<div id="home">',
          '  <ui-view></ui-view>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
