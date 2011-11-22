(function () {
  "use strict";

  App.views.OffersView = Ext.extend(Ext.Panel, {
    title: 'Special Offers',
    iconCls: 'star',
    
    items: [{
      html: 'special offers',
      styleHtmlContent: true
    }]
  });
  
}());