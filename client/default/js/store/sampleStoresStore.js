var sampleData;

(function () {
  "use strict";
  
  sampleData = [{
    name: 'Fermoy Shop',
    address: ['4/6 McCurtain Street', 'Fermoy', 'Fermoy'],
    county: 'Cork',
    distance: '0',
    phone: ['025 12345'],
    hours: ['09:00 - 18:00 Thurs/Fri: 09:00', '09:00 - 18:00', '12:00 - 18:00'],
    location: {
      latitude: '52.14',
      longitude: '-8.28'
    },
    products: ['Dolls', 'Trucks', 'Cars', 'Footballs', 'Bikes', 'Skateboards', 'Lego', 'Books', 'Cards']
  }, {
    name: 'Arklow Shop',
    address: ['Arklow', 'Arklow'],
    county: 'Wicklow',
    distance: '0',
    phone: ['0402 54321'],
    hours: ['08:00 - 21:00', '08:00 - 21:00', '08:00 - 21:00'],
    location: {
      latitude: '52.79',
      longitude: '-6.18'
    },
    products: ['Dolls', 'Cars', 'Footballs', 'Bikes', 'Skateboards', 'Lego', 'Books', 'Cards']
  }, {
    name: 'Ballymote Shop',
    address: ['O\'Connell Street', 'Ballymote', 'Ballymote'],
    county: 'Sligo',
    distance: '0',
    phone: ['071 1234567'],
    hours: ['08:00 - 20:00', '08:00 - 20:00', '08:00 - 14:00'],
    location: {
      latitude: '54.09',
      longitude: '-8.51'
    },
    products: ['Dolls', 'Cars', 'Footballs', 'Bikes', 'Skateboards', 'Lego', 'Books', 'Cards']
  }];

  App.stores.sampleStores1Store = new Ext.data.JsonStore({
    model: 'Store',

    data: sampleData
  });

}());