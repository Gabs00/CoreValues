define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('home.html',
        [
          '<div id="home"',
          ' ng-swipe-left="go()"',
          ' ng-swipe-right="go()"',
          '>',
          '  <ui-view></ui-view>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
