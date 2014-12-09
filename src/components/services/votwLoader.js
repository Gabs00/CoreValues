define(['app'], function(app){

  var VtowStorage = function(){
      this.value = {
        cat:'',
        catTitle:'',
        title:'',
        description:'',
      };
  };

  VtowStorage.prototype.needChange = function(){
    var addDate = this.dateAdded;
    if( addDate === undefined){
      return true;
    } else {

      var today = new Date(Date.now());

      //Setting time of day to 0s so that we don't update values added today.
      today.setHours(0,0,0);

      //set today to last sunday and compare with date
      //added. If date added is less than last sunday, update the value
      today.setDate(today.getDate() - today.getDay());
      if(addDate.getTime() < today.getTime()){
        return true;
      }
    }
    return false;
  };

  VtowStorage.prototype.toJSON = function(){
    return {
      values:this.value,
      dateAdded:this.dateAdded
    };
  };

  VtowStorage.prototype.load = function(values, dateAdded){
    this.value = values;
    this.dateAdded = new Date(dateAdded);
  };

  VtowStorage.prototype.get = function(){
      return this.value;
  };

  VtowStorage.prototype.update = function(values){
    this.dateAdded = new Date(Date.now());
    this.value = values;
    console.log(this.dateAdded);
  };


  /*
    Actual factory code below
  */

  app.factory('VotwLoader', [ '$window', 'ContentDB', function($window, db){

      var valueStore = new VtowStorage();

      function get(){
        if(valueStore.needChange()){
          return update(valueStore, Object.keys(db.get()));
        } else {
          return valueStore.get();
        }
      }

      //Randomly gets a new value of the week
      function update(store, keys){
        var value = {};
        //Picking a random category
        var i = Math.floor(Math.random() * keys.length);
        var cat = value.cat = keys[i];


        var set = db.getValueSet(cat);
        value.catTitle = set.title;

        //Picking between two values
        var k = Math.random() >= 0.50 ? 1:0;

        var votw = set.values[k];
        value.title = votw.title;
        value.description = votw.description;

        store.update(value);
        return store.get();
      }

      function save(store){
        window.localStorage.setItem('CoreValueApp', JSON.stringify(store));
      }

      var storeData = window.localStorage.getItem('CoreValueApp');

      //Checks if a previous value of the week exists and loads
      //it into our valueStore, if there isn't one we add a new votw.
      if(storeData === null){

        update(valueStore, Object.keys(db.get()));
        save(valueStore);

      } else {

        var store = JSON.parse(storeData);
        valueStore.load(store.values, store.dateAdded);

      }

      return {
        get: get
      };

    }

  ]);
});
