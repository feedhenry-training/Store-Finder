(function () {
  "use strict";

  App.views.ResultsView = Ext.extend(Ext.Panel, {
    bodyPadding: '5 10',
    
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    
    height: '100%',
    
    items: [
      App.views.storeListResultsView = new App.views.StoreListView({store: null, flex: 1}).hide()
    ]
  });

}());