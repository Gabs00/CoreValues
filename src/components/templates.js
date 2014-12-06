require(['./templates'],
define([
  'underscore',
  './templates'
  ],
  function(_){
    console.log();
    var template = {};
    var fields = [
      'navbar'
    ];
    _.each(arguments, function(value, index){
      if(index > 0){
        var field = fields.shift();
        template[field] = value;
      }
    });

    return template;
  }
);
);
