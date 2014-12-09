define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('section.html',
        [
          '<div id="section">',
          '  <h2 class="section-title" ng-click="collapsed = !collapsed"> {{ getSectionTitle(set) }} </h2>',
          '  <ul class="section-values" collapse="collapsed">',
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
