(function () {
  "use strict";
  
  Ext.ns('myLocation');

  App.views.SearchView = Ext.extend(Ext.Panel, {
    bodyPadding: '5 10',
    scroll: 'vertical',
    
    listeners: {
      render: function () {
        console.log('search view render');
        
        App.controllers.locationController.getLocation(function (err, location) {
          console.log('getLocation: err: ' + err + ', location:' + location);
          if (err !== null) {
            loadingMask.hide();
            Ext.Msg.alert('Location Problem', err.message);
          }
          else {
            myLocation = location;
            App.controllers.storesController.findByQuery({
              location: myLocation,
              applyLocationFilter: true,
              limit: 3
            }, function (err, stores) {
              loadingMask.hide();
              if (err !== null) {
                Ext.Msg.alert('Store Query Problem', err.message);
              }
              else {
                App.views.storeListNearestView.bindStore(new Ext.data.JsonStore({
                  model: 'Store',
                  data: stores
                }));
                App.views.storeListNearestView.show();
              }
            });
          }
        });
      },
      scope: this
    },

    items: [{
      xtype: 'form',
      bodyMargin: '0',
      bodyPadding: '0',
      
      items: [{
        xtype: 'fieldset',
        title: 'Store Locator',
        items: [new CustomSelectView({
          id: 'countySelect',
          name: 'county',
          label: 'County',
          store: App.stores.countyStore
        }).setValue(App.stores.countyStore.getAt(5).get('value')), 
        new CustomSelectView({
          id: 'productSelect',
          name: 'product',
          label: 'Product',
          store: App.stores.productStore,
        }),
        ]
      }]
    }, 
    {
      xtype: 'spacer',
      height: 20
    },
    {
      xtype: 'button',
      text: 'Find',
      ui: 'action',
      flex: 1,
      handler: function (el, e) {
        var county, product;
        
        county = Ext.getCmp('countySelect').getValue();
        product = Ext.getCmp('productSelect').getValue();
        if (product === 'All') {
          product = null;
        }

        loadingMask.show();
        
        App.controllers.storesNavigationController.showResultsView(county, product, function () {
          loadingMask.hide();
        });
      }
    },
    
    {
      xtype: 'panel',

      items: [{
        html: 'Stores Near You',
        height: 40,
        styleHtmlContent: true
      }, App.views.storeListNearestView = new App.views.StoreListView({
        store: null,
        height: 125,
        cls: 'roundedList'
      }).hide()]
    }]
  });

}());
