(function () {
  "use strict";
  
  Ext.ns('StoresBackButton');
  
  StoresBackButton = Ext.extend(Ext.Button, {
    id: 'storesBackButton',
    text: 'Back',
    ui: 'back',
    handler: function () {
      var prev = App.views.storesView.prevCard.pop();
      App.controllers.storesNavigationController.updateBackButton();
      App.views.storesView.setActiveItem(prev);
    }
  });
  
}());