(function () {
  "use strict";

  App.views.StoresView = Ext.extend(Ext.Panel, {
    title: 'Nearest Stores',
    iconCls: 'search',

    layout: 'card',
    
    prevCard: [],
    
    listeners: {
      show: function () {
        console.log('show stores view');
        App.controllers.storesNavigationController.updateBackButton();
      },
      hide: function () {
        console.log('hide stores view');
        App.controllers.storesNavigationController.updateBackButton(true);
      }
    },

    items: [
      App.views.searchView = new App.views.SearchView(),
      App.views.resultsView = new App.views.ResultsView(),
      App.views.storeView = new App.views.StoreView(),
      App.views.directionsView = new App.views.DirectionsView()
    ]
  });
  
}());