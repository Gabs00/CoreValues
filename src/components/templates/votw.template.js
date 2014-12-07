define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('votw.html',
        [
          '<div id="votw">',
          '  <h2>Value of the Week</h2>',
          '  <h3>{{ votw.title }}</h3>',
          '  <p>',
          '    {{ votw.description }}',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
