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
        'Show pride in our ability',
        'We work hard, like to learn new things, and '+
        'are always on the lookout for ways to grow personally '+
        'and professionally. We are proud of what we know, and use '+
        'our knowledge to help our clients be more successful.'
      );
      CoreValues.core.setValue(
        'Do it right the first time',
        'We hate re-work, so do our best work the first '+
        'time. And, before we ever hit "send" or say a project '+
        'is complete, we double- or triple-check it for quality.'
      );

      CoreValues.focus.setValue(
        'Follow up on everything',
        'The objective of every client interaction – '+
        'internal or external – is to make every experience '+
        'outstanding, surprising our clients with our knowledge, quality, level of service, and speed.'
      );
      CoreValues.focus.setValue(
        'Delight our clients',
        'Internal and external clients rely on us, and '+
        'we rely on them. Record a follow up date and time '+
        'for every promised action and take responsibility for its completion.'
      );

      CoreValues.collaboration.setValue(
        'Let the silence do the heavy lifting',
        'The only way to know what someone else thinks, '+
        'believes or knows is to ask them, and then to '+
        'carefully listen to what they say. You have two ears and '+
        'one mouth - use them proportionally.'
      );
      CoreValues.collaboration.setValue(
        'Involve everyone',
        'Everyone has ideas and wants to be involved in '+
        'our success. We value each person’s input, so be '+
        'sure to involve those who don’t say much in every discussion. '+
        'It’s often the quiet team members who bring the most insight. '
      );

      CoreValues.effectiveness.setValue(
        'Take responsibility and be accountable',
        'Don’t be a victim. Ask for what you need and take '+
        'full responsibility for your success. If you see a '+
        'problem, own it until it’s resolved.'
      );
      CoreValues.effectiveness.setValue(
        'Be a coach',
        'Help your team members learn and grow. We thrive '+
        'as a business and as individuals when we are '+
        'constantly growing and improving.'
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
