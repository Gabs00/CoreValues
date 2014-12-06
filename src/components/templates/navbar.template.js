define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('navbar.html',
        [
          '<div id="navbar">',
          '  <ul class="nav">',
          '  </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
