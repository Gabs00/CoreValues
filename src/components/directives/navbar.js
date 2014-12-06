define(['app', 'templates'],
  function(app, templates){
    app.directive('cvNavbar', function(){
      return {
        restrict: 'E',
        template: templates.navbar
      }
    });
  }
);
