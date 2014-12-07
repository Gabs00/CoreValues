define(['app'], function(app){
  app.controller('MainCTRL',['$scope','ContentDB', function($scope, db){
    $scope.dbKeys = Object.keys(db.get());
    $scope.votw = {
      cat:'',
      catTitle:'',
      title:'',
      description:'',
    };

    //Need to change this to get the title
    //using the getValueSetTitles method.
    $scope.getSectionTitle = function(setName){
      return db.get()[setName].title;
    };

    $scope.getValues = function(setName){
      var set = db.getValueSet(setName);
      return set.values;
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

    $scope.setVotw();
    console.log($scope.votw);
  }]);
});
