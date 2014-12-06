define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('home.html',
        [
          '<div id="home">',
          '  <a ui-sref="home.votw">Value of the Week</a>',
          '  <br />',
          '  <a ui-sref="home.values">Core Values</a>',
          '  <ui-view></ui-view>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
