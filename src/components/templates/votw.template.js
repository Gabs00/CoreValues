define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('votw.html',
        [
          '<div id="votw">',
          '  <h2>Value of the Week</h2>',
          '  <h3>Value Name</h3>',
          '  <p>',
          '    Details about core value',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
