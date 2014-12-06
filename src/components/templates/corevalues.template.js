define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('corevalues.html',
        [
          '<div id="core-values">',
          '  <h2>A list of core values</h2>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
