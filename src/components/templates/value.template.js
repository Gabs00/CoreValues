define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('value.html',
        [
          '<div class="value">',
          '  <div class="value-title">',
          '    <h3 class="value-title-header">{{ val }}</h2>',
          '  </div>',
          '  <div class="value-description">',
          '    <p class="value-description-text">',
          '      {{ des }}',
          '    </p>',
          '  </div>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
