define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('value.html',
        [
          '<div id="navbar">',
          '  <h3>CoreValue1</h3>',
          '  <p>',
          '    Details about core value',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
