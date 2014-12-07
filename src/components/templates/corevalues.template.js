define(['app', 'underscore'],
  function(app, _){
    app.run(function($templateCache){
      $templateCache.put('corevalues.html',
        [
          '<div id="core-values">',
          '  <div class="set" ng-repeat="set in dbKeys">',
          '    <h2> {{ getSectionTitle(set) }} </h2>',
          '    <cv-value ng-repeat="value in getValues(set)"',
          '      val="value.title" des="value.description"',
          '    ></cv-value>',
          '  </div>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
