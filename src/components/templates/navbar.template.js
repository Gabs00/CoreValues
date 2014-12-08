define(['app'],
  function(app){
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
