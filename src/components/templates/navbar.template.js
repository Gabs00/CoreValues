define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('navbar.html',
        [
          '<div id="navbar">',
          '  <ul class="navigation">',
          '    <li role="presentation" ui-sref-active="active">',
          '      <a ui-sref="home.votw" >Value of the Week</a>',
          '    </li>',
          '    <li role="presentation" ui-sref-active="active">',
          '      <a ui-sref="home.values">Core Values</a>',
          '    </li>',
          '  </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
