define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('votw.html',
        [
          '<div id="votw" >',
          '  <div class="panel-heading votw-header">',
          '    <h2 class="votw-title-text">Value of the Week</h2>',
          '  </div>',
          '  <div class="votw-body">',
          '    <cv-value val="votw.title" des="votw.description">',
          '  </div>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
