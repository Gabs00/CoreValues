define(['app'], function(app){
  app.controller('MainCTRL',[
    '$scope',
    'ContentDB',
    '$state',
    'VotwLoader',

    function($scope, db, $state, votw){
      $scope.dbKeys = Object.keys(db.get());

      $scope.votw = votw.get();

      //Toggles between value of the week, and all value states
      $scope.go = function(){
        var state = $state.is('home.votw') ?
          'home.values': 'home.votw';
        $state.go(state);
      };

      console.log($scope.votw);
  }]);
});
