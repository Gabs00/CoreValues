define(['app'],
  function(app){
    app.factory('ContentDB', [function(){
      /*
        Since this is a client side only app,
        I'll using this factory as a database

        I will also be using local storage to keep track
        of the Core Value of the week and which values haven't
        been used yet.
      */
      function ValueSet(title){
        this.title = title || 'Values';
        this.values = [];
      }

      ValueSet.prototype.setValue = function(title, description){
        this.values.push({
          'title':title,
          'description':description
        });
      };
      var  CoreValues = {
        core: new ValueSet('Core Values'),
        focus: new ValueSet('Focus on Service'),
        collaboration: new ValueSet('The Collaborative Way'),
        effectiveness: new ValueSet('Personal Effectiveness')
      };

      CoreValues.core.setValue(
        'Show Pride in Our Ability',
        'tmp'
      );
      CoreValues.core.setValue(
        'Constantly Improve Processess',
        'tmp'
      );

      CoreValues.focus.setValue(
        'Follow Up on Everything',
        'tmp'
      );
      CoreValues.focus.setValue(
        'Create a Feeling of Warmth and Friendliness in Every Client Interaction',
        'tmp'
      );

      CoreValues.collaboration.setValue(
        'Let The Silence Do The Heavy Lifting',
        'tmp'
      );
      CoreValues.collaboration.setValue(
        'Honor Your Commitments',
        'tmp'
      );

      CoreValues.effectiveness.setValue(
        'Take Responsibility and Be Accountable',
        'tmp'
      );
      CoreValues.effectiveness.setValue(
        'Live With Integrity',
        'tmp'
      );

      function get(){
        return CoreValues;
      }
      function getValueSet(setName){
        return CoreValues[setName];
      }

      //exclude setName and get all value titles
      function getTitles(setName){
        if(typeof setName !== undefined){
          return CoreValues[setName].values.map(function(value){
            return value.title;
          });
        } else {
          var values = [];
          for(var s in CoreValues){
            CoreValues[s].values.forEach(function(value){
              values.push(value.title);
            });
          }
          return values;
        }
      }

      //Titles for the sections
      function getValueSetTitles(){
        return Object.keys(CoreValues).map(function(key){
          return CoreValues[key].title;
        });
      }

      return {
        'get': get,
        'getValueSet': getValueSet,
        'getTitles': getTitles,
        'getValueSetTitles':getValueSetTitles
      };
    }]);
  }
);
