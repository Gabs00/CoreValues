define(['app'], function(app){
  app.controller('MainCTRL',['$scope','ContentDB','$state', function($scope, db, $state){
    $scope.dbKeys = Object.keys(db.get());
    $scope.votw = {
      cat:'',
      catTitle:'',
      title:'',
      description:'',
    };

    $scope.setVotw = function(){

      //Picking a random category
      var i = Math.floor(Math.random() * $scope.dbKeys.length);
      var cat = $scope.votw.cat = $scope.dbKeys[i];


      var set = db.getValueSet(cat);
      $scope.catTitle = set.title;

      //Picking between two values
      var k = Math.random() >= 0.50 ? 1:0;

      var votw = set.values[k];
      $scope.votw.title = votw.title;
      $scope.votw.description = votw.description;
    };

    $scope.go = function(){
      var state = $state.is('home.votw') ?
        'home.values': 'home.votw';
      $state.go(state);
    };
    $scope.setVotw();
  }]);
});
