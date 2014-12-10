define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('value.html',
        [
          '<div class="values">',
          '  <div class="panel-heading">',
          '    <h2 class="value-title-text">{{ val }}</h2>',
          '  </div>',
          '  <div class="value-description-text">',
          '    {{ des }}',
          '  </div>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
