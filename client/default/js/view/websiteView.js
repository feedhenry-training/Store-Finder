(function () {
  "use strict";

  App.views.WebsiteView = Ext.extend(Ext.Panel, {
    title: 'Website',
    iconCls: 'more',
    
    items: [{
      html: 'website',
      styleHtmlContent: true
    }]
  });
  
}());