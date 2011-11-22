(function () {
  "use strict";
    
  Ext.regModel('Store', {
    fields: ['name', 'distance']
  });
  
  Ext.ns('loadingMask');

  loadingMask = new Ext.LoadMask(Ext.getBody(), {
    msg: "Searching..."
  });
  
  Ext.setup({
    fullscreen: true
  });
  
  Ext.regApplication({
    name: "App",
    launch: function () {
      console.log('showing main loading mask');
      loadingMask.show();
      console.log('launching app');
      
      if (Ext.is.Android) {
        Ext.Anim.override({
          disableAnimations: true
        });
      }
      
      this.views.mainView = new this.views.MainView({
        listeners: {
          afterrender: function () {
            console.log('mainview afterrender');
            Ext.getCmp('storesBackButton').hide();
          }
        }
      });
    }
  });
}());
