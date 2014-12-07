define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('section.html',
        [
          '<div id="section">',
          '  <ul class="section-values">',
          '    <li>CoreValue 1</li>',
          '    <li>CoreValue 2</li>',
          '  </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
