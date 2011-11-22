(function () {
  "use strict";

  App.stores.productStore = new Ext.data.JsonStore({
    model: 'Product',
    data: [{
      value: 'All',
      text: 'All'
    }, {
      value: 'Mobile Top-up',
      text: 'Mobile Top-up'
    }, {
      value: 'Tesco Mobile',
      text: 'Tesco Mobile'
    }, {
      value: 'Refuse and Recycling Payments',
      text: 'Refuse and Recycling Payments'
    }, {
      value: 'M50',
      text: 'M50'
    }, {
      value: 'World Wide Money',
      text: 'World Wide Money'
    }, {
      value: '3V',
      text: '3V'
    }, {
      value: 'Natural Gas Card',
      text: 'Natural Gas Card'
    }, {
      value: 'Bill Payments',
      text: 'Bill Payments'
    }, {
      value: 'O2 Money',
      text: 'O2 Money'
    }, {
      value: 'Ruby Card',
      text: 'Ruby Card'
    }, {
      value: 'Postfone',
      text: 'Postfone'
    }]
  });
  
}());