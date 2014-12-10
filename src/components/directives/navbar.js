define(['app', 'templates'],
  function(app, templates){

    app.directive('cvNavbar', [
    '$templateCache',

    function(templates){
      return {
        restrict: 'E',
        replace:true,
        template: templates.get('navbar.html')
      };
    }]);
  }
);
