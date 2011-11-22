(function () {
  "use strict";
  
  App.controllers.directionsController = new Ext.Controller({

    directionsService: null,
    directionsRenderer: null,
    
    showMapDirections: function (map, from, to, callback) {
      console.log('showMapDirections');
      
      var self = this, request;
    
      request = {
        origin: from,
        destination: to,
        travelMode: google.maps.DirectionsTravelMode.WALKING
      };
      
      if (self.directionsService === null) {
        self.directionsService = new google.maps.DirectionsService();
        self.directionsRenderer = new google.maps.DirectionsRenderer();
      }
      else {
        self.directionsRenderer.setMap(null);  
      }
       
      self.directionsRenderer.setMap(map);
      
      self.directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          self.directionsRenderer.setDirections(result);
          callback(null);
        } else {
          map.setCenter(from);
          var error = {
            message: 'Unable to get directions from your current location'
          };
          callback(error);
          console.log('map directions fail: ' + status);
        }
      });
    }
  });
}());