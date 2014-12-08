define(['app'],
  function(app){
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
