define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('corevalues.html',
        [
          '<div id="core-values">',
          '  <ul class="core-values-sections"> ',
          '    <li class="core-values-item" ng-repeat="set in dbKeys">',
          '     <cv-section set="set"></cv-section>',
          '    </li>',
          ' </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
