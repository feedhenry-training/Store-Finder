(function () {
  "use strict";

  App.views.DirectionsView = Ext.extend(Ext.Panel, {
    store: null,
    
    bodyPadding: '5 10',
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    width: '100%',
    height: '100%',
    
    items: [ {
      xtype: 'panel',
      flex: 1,
      scroll: false,
      items: [new Ext.Map({
        id: 'storeDirectionsMapPanel',
        useCurrentLocation: false,
        mapOptions: {
          // center map to ireland
          center: new google.maps.LatLng(53, -8),
          zoom: 6
        }
      })]
    }],

    listeners: {
      afterrender: function () {
        console.log('directions map view afterrender');
        var mapMask = new Ext.LoadMask(Ext.getCmp('storeDirectionsMapPanel').el, {});
      },
      scope: this
    },
  
    setStore: function (store) {
      var self = this, data, mask;
      
      self.store = store;
      
      data = store.data;
      
      mask = Ext.getCmp('storeDirectionsMapPanel').setLoading(true);
      App.controllers.locationController.getLocation(function (err, location) {
        var startStr, endStr, map;
        
        if (err !== null) {
          mask.hide();
          Ext.Msg.alert('Location Problem', err.message);
        } else {
          startStr = new google.maps.LatLng(location.lat, location.lon);
          endStr = new google.maps.LatLng(data.location.lat, data.location.lon);
          map = Ext.getCmp('storeDirectionsMapPanel').map;
          
          App.controllers.directionsController.showMapDirections(map, startStr, endStr, function (err) {
            if (err !== null) {
              Ext.Msg.alert('Directions Problem', err.message);
            }
            mask.hide();
          });
        }
      });
    }
    
  });

}());