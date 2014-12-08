define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('section.html',
        [
          '<div id="section">',
          '  <h2 class="section-title"> {{ getSectionTitle(set) }} </h2>',
          '  <ul class="section-values">',
          '    <li class="section-item" ng-repeat="value in getValues(set)">',
          '      <cv-value val="value.title" des="value.description">',
          '      </cv-value>',
          '    </li>',
          '  </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
