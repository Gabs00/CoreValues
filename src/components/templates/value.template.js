define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('value.html',
        [
          '<div class="value">',
          '  <h4 class="value-title">{{ val }}</h4>',
          '  <p class="value-description">',
          '    {{ des }}',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
