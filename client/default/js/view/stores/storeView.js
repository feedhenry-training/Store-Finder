(function () {
  "use strict";

  App.views.StoreView = Ext.extend(Ext.Panel, {
    store: null,

    scroll: 'vertical',

    bodyPadding: '5 10',

    items: [{
      xtype: 'panel',
      layout: 'hbox',
      height: 120,

      items: [new Ext.Map({
        id: 'storeMapTemplate',
        cls: 'mapPanel',
        useCurrentLocation: false,
        height: 120,
        width: '50%',

        listeners: {
          el: {
            tap: function () {
              console.log('map tap');
              App.controllers.storesNavigationController.showDirectionsView(App.views.storeView.store);
            }
          },
          afterrender: function () {
            console.log('map view afterrender');
            var mapMask = new Ext.LoadMask(Ext.getCmp('storeMapTemplate').el, {
              msg: '',
              msgCls: 'mapMaskLoading'
            });
          },
          scope: this
        },
        mapOptions: {
          zoom: 14,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          draggable: false
        }
      }),
      {
        xtype: 'panel',
        flex: 1,
        height: '100%',

        dockedItems: [{
          id: 'storeAddressTemplate',
          dock: 'top',
          xtype: 'panel',
          bodyPadding: '10 0 0 5',
          tpl: new Ext.XTemplate([
            '<p class="storeAddress">',
              '<span class="storeAddressTitle">{[values.address[2]]}</span><br/>',
              '<span>{name}</span><br/>',
              '<span>{[values.address[0]]}</span><br/>',
              '<span>{[values.address[1]]}</span><br/>',
              '<span>{county}</span>',
            '</p>'])
        }]
      }]
    }, {
      xtype: 'panel',
      bodyPadding: '5 0',
      
      items: [{
        xtype: 'panel',
        id: 'storeProductsTemplate',
        cls: 'storeProducts',
        tpl: new Ext.XTemplate(
          '<h3>Products</h3>',
          '<ul>',
            '<tpl for="products">',
              '<li>{.}{[this.listSeparator(xindex, xcount)]}</li>',
            '</tpl>',
          '</ul>',
        {
          compiled: true,
          listSeparator: function (position, size) {
            if (position === size) {
              return "";
            }
            else if (position < (size - 1)) {
              return " <span style='font-weight: bolder; font-weight: 1.2em;'>|</span> ";
            }
            else {
              return " and ";
            }
          }
        })
      }]
    }, {
      xtype: 'panel',
      bodyPadding: '5 0',

      items: [{
        xtype: 'panel',
        id: 'storeHoursTemplate',
        cls: 'storeHours',
        tpl: new Ext.XTemplate([
          '<h3>Opening Hours</h3>',
          '<p>',
            '<span><strong>Mon-Fri:</strong> {[values.hours[0]]}</span><br/>',
            '<span><strong>Sat:</strong> {[values.hours[1]]}</span><br/>',
            '<span><strong>Sun:</strong> {[values.hours[2]]}</span>',
          '</p>'])
      }]
    }, {
      xtype: 'panel',

      defaults: {
        xtype: 'button',
        ui: 'action',
        margin: '5 0'
      },

      items: [{
        id: 'storePhoneButton',
        text: 'Phone',
        handler: function (el, e) {
          Ext.Msg.confirm("Phone Call", "Are you sure you want to call this number?", Ext.emptyFn);
          var num = Ext.getCmp('storePhoneButton').getText();
          Ext.select('.x-msgbox .x-button-action .x-button-label').elements[0].innerHTML = '<a class="buttonLink" href="tel:' + num + '">&nbsp;&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;</a>';
          //span = Ext.select('#storePhoneButton .x-button-label');
          //span.elements[0].innerHTML = '<a class="buttonLink" href="tel:' + data.phone[0].trim().replace(' ', '') + '">' + data.phone[0] + '</a>';
        }
      }, {
        text: 'Directions',
        handler: function (el, e) {
          App.controllers.storesNavigationController.showDirectionsView(App.views.storeView.store);
        }
      }]
    }],

    setStore: function (store) {
      this.store = store;
      
      var data = store.data, mask, location, map, marker, span;

      // update templates
      Ext.getCmp('storeAddressTemplate').update(data);
      Ext.getCmp('storeHoursTemplate').update(data);
      Ext.getCmp('storeProductsTemplate').update(data);
      
      // update map location
      mask = Ext.getCmp('storeMapTemplate').setLoading(true);
      mask.el.down('div.x-loading-msg').setHTML('');
      location = new google.maps.LatLng(data.location.lat, data.location.lon);
      map = Ext.getCmp('storeMapTemplate').map;
      map.setCenter(location);
      marker = new google.maps.Marker({
        position: location,
        map: map
      });
      mask.hide();

      Ext.getCmp('storePhoneButton').setText(data.phone[0].trim());
      
      // update buttons text
      //span = Ext.select('#storePhoneButton .x-button-label');
      //span.elements[0].innerHTML = '<a class="buttonLink" href="tel:' + data.phone[0].trim().replace(' ', '') + '">' + data.phone[0] + '</a>';
      
      //Ext.select('.x-msgbox .x-button-action .x-button-label').elements[0].innerHTML = '<a class="buttonLink" href="tel:123456">Yes</a>';

    }
  });

}());