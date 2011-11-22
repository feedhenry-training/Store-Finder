(function () {
  "use strict";
  
  App.controllers.storesNavigationController = new Ext.Controller({
    
    updateBackButton: function (neverShow) {
      if (App.views.storesView.prevCard.length < 1 || neverShow) {
        Ext.getCmp('storesBackButton').hide();
      }
      else {
        Ext.getCmp('storesBackButton').show();
      }
    },
    
    showDirectionsView: function (store) {
      App.views.storesView.prevCard.push(App.views.storesView.getActiveItem());
      this.updateBackButton();
      App.views.storesView.setActiveItem(App.views.directionsView);
      App.views.directionsView.setStore(store);
    },
    
    showStoreView: function (store) {
      console.log('showStoreView');
      App.views.storesView.prevCard.push(App.views.storesView.getActiveItem());
      this.updateBackButton();
      App.views.storesView.setActiveItem(App.views.storeView);
      App.views.storeView.setStore(store);
    },
    
    showResultsView: function (county, product, callback) {
      var eq = [], contains = [];
      
      App.views.storesView.prevCard.push(App.views.storesView.getActiveItem());
      this.updateBackButton();
      App.views.storesView.setActiveItem(App.views.resultsView);
      
      contains.push({name: 'county', value: county});
      if (product !== null) {
        eq.push({name: 'products', value: product});
      }
      
      App.controllers.storesController.findByQuery({
        eq: eq,
        contains: contains,
        location: myLocation
      }, function (err, stores) {
        if (err !== null) {
          Ext.Msg.alert('Store Query problem', err.message);
        }
        else {
          App.views.storeListResultsView.bindStore(new Ext.data.JsonStore({
            model: 'Store',
            data: stores 
          }));
          App.views.storeListResultsView.show();
        }
        callback();
      });
    }
  });
}());