define(['app'],
  function(app){
    app.run(function($templateCache){
      $templateCache.put('section.html',
        [
          '<div class="section">',
          '  <div class="panel-heading">',
          '    <h2 class="section-title-text" ng-click="collapsed = !collapsed">',
          '      {{ getSectionTitle(set) }}',
          '    </h2>',
          '  </div>',
          '  <ul class="section-values" collapse="collapsed">',
          '    <li class="section-item" ng-repeat="value in getValues(set)">',
          '      <cv-value val="value.title" des="value.description" >',
          '      </cv-value>',
          '    </li>',
          '  </ul>',
          '</div>'
        ].join('\n')
      );
    });
  }
);
