(function () {
  "use strict";
  
  App.views.StoreListView = Ext.extend(Ext.List, {
    itemTpl: '{name} ({[values.address[2]]})<br /> <tpl if="distance"><i>{distance}km</i></tpl>',
    itemCls: 'storeListItem',
    onItemDisclosure: true,
    deferEmptyText: false,
    emptyText: 'No Stores found...',
    
    listeners: {
      itemtap: function (subList, subIdx, el, e) {
        var store = subList.getStore(),
          record = store.getAt(subIdx);
        if (record) {
          App.controllers.storesNavigationController.showStoreView(record);
        }
      },
      scope: this
    }
  });
  
}());