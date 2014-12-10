define(['app', 'templates'],
  function(app, templates){

    app.directive('cvSection', [
    '$templateCache',
    'ContentDB',

    function(templates, db){
      return {
        restrict: 'E',
        replace:true,
        scope: {
          set:'='
        },
        template: templates.get('section.html'),
        link: function(scope, elem, attr){
          scope.dbKeys = Object.keys(db.get());


          scope.collapsed = true;
          //Need to change this to get the title
          //using the getValueSetTitles method.
          scope.getSectionTitle = function(setName){
            return db.get()[setName].title;
          };
          scope.getValues = function(setName){
            var set = db.getValueSet(setName);
            return set.values;
          };
        }
      };
    }]);
  }
);
