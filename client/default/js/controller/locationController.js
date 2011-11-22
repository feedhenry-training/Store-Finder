(function () {
  "use strict";
  
  App.controllers.locationController = new Ext.Controller({
    
    getLocation: function (callback) {
      console.log('getLocation');
      var error = {
        message: 'Unable to get current location'
      };

      console.log('calling $fh.geo: $fh>' + typeof $fh);
      console.log('calling $fh.geo: $fh.geo>' + typeof $fh.geo);
      $fh.geo({}, function (res) {
        console.log('$fh.geo success');
        if (res && res.lat && res.lon) {
          console.log('got $fh.geo res: ' + JSON.stringify(res));
          var location = {lat: res.lat, lon: res.lon}; 
          callback(null, location);
        }
        else {
          callback(error);
        }
      }, function (code, props, e) {
        console.log('$fh.geo fail');
        if (CONFIG.sampleLocation) {
          console.log('setting timeout');
          setTimeout(function () {
            var location = {lat: 52.25, lon: -7.12};
            console.log('timeout callback:' + location);
            callback(null, location);          
          }, CONFIG.fakeServerTimeout);
        }
        else {
          callback(error);
        }
      });
    
    }
  });
}());