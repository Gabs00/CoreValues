define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('home.html',
        [
          '<div id="home"',
          ' ng-swipe-left="go(\'home.votw\')"',
          ' ng-swipe-right="go(\'home.values\')"',          
          '>',
          '  <ui-view></ui-view>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
