(function () {
  "use strict";

  App.stores.productStore = new Ext.data.JsonStore({
    model: 'Product',
    data: [{
      value: 'All',
      text: 'All'
    }, {
      value: 'Dolls',
      text: 'Dolls'
    }, {
      value: 'Trucks',
      text: 'Trucks'
    }, {
      value: 'Cars',
      text: 'Cars'
    }, {
      value: 'Footballs',
      text: 'Footballs'
    }, {
      value: 'Bikes',
      text: 'Bikes'
    }, {
      value: 'Lego',
      text: 'Lego'
    }, {
      value: 'Books',
      text: 'Books'
    }, {
      value: 'Cards',
      text: 'Cards'
    }, {
      value: 'Comics',
      text: 'Comics'
    }]
  });
  
}());