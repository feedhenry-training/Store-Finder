(function () {
  "use strict";
  
  App.controllers.locationController = new Ext.Controller({
    
    getLocation: function (callback) {
      console.log('getLocation');
      var error = {
        message: 'Unable to get current location'
      };
      var location = {lat: '52.253401', lon: '-7.187886'}; 
      callback(null, location);    
    }
  });
}());