define(['app', 'templates'],
  function(app, templates){

    app.directive('cvValue', [
    '$templateCache',

    function(templates){
      return {
        restrict: 'E',
        replace: true,
        scope: {
          set:'=',
          val:'=',
          des:'='
        },
        template: templates.get('value.html'),

      };
    }]);
  }
);
