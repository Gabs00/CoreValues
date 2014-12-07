define(['app', 'templates'],
  function(app, templates){

    app.directive('cvValue', [
    '$templateCache',

    function(templates){
      return {
        restrict: 'E',
        scope: {
          set:'=',
          val:'=',
          des:'='
        },
        template: templates.get('value.html')
      };
    }]);
  }
);
