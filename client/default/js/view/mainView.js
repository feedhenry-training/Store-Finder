(function () {
  "use strict";
  
  App.views.MainView = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    items: [{
      layout: 'card',
      xtype: 'panel',

      /* TODO: uncomment to enable tabbar with additional tabs
      xtype: 'tabpanel',
      tabBar: {
        cls: 'tabBar',
        dock: 'bottom',
        layout: {
          pack: 'center'
        }
      },
      */
      
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        cls: 'mainToolbar',
        items: [
          new StoresBackButton()
        ]
      }],
      
      items: [
        App.views.storesView = new App.views.StoresView(),
        App.views.offersView = new App.views.OffersView(),
        App.views.websiteView = new App.views.WebsiteView()
      ]
    }]
  });
  
}());