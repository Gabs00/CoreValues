define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('votw.html',
        [
          '<div id="votw" >',
          '  <h2 class="page-header">Value of the Week</h2>',
          '  <h3 class="value-title">{{ votw.title }}</h3>',
          '  <p class="value-description" >',
          '    {{ votw.description }}',
          '  </p>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
