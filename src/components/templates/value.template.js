define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('value.html',
        [
          '<div class="single-value">',
          '  <h4>{{ val }}</h4>',
          '  <p>',
          '    {{ des }}',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
