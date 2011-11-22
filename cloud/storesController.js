var CONFIG = require("config.js");

var sampleResponse = 
  [
    {
      "address":[
        "Cappoquin",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":1,
      "hours":[
        "09:00 - 18:00 Thurs/Fri: 09:00",
        "09:00 - 18:00",
        "12:00 - 18:00"
      ],
      "location":{
        "lat":52.26,
        "lon":-7.13
      },
      "name":"Cappoquin Shop",
      "phone":[
        "05812345"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "18a St Johns Park",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":1,
      "hours":[
        "07:30 - 21:00",
        "08:00 - 20:00",
        "08:00 - 20:00"
      ],
      "location":{
        "lat":52.26,
        "lon":-7.11
      },
      "name":"Johns Shop",
      "phone":[
        "051123456",
        "0861234567"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Lismore Park",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":1,
      "hours":[
        "07:00 - 22:00",
        "07:00 - 22:00",
        "08:00 - 22:00"
      ],
      "location":{
        "lat":52.25,
        "lon":-7.14
      },
      "name":"Lismore Shop",
      "phone":[
        "51374046"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "49 Ballybricken",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":1,
      "hours":[
        "09:00 - 18:00 Thurs/Fri: 09:00",
        "09:00 - 18:00",
        "12:00 - 18:00"
      ],
      "location":{
        "lat":52.26,
        "lon":-7.12
      },
      "name":"Ballybricken Shop",
      "phone":[
        "051872536"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Ballybeg",
        "Waterford City",
        "Waterford Town"
      ],
      "county":"Co Waterford",
      "distance":1,
      "hours":[
        "08:00 - 22:00",
        "08:00 - 22:00",
        "08:00 - 22:00"
      ],
      "location":{
        "lat":52.26,
        "lon":-7.12
      },
      "name":"Ballybeg Shop",
      "phone":[
        "051372449"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Park Road",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":2,
      "hours":[
        "07:00 - 21:45",
        "07:30 - 21:45",
        "07:30 - 21:45"
      ],
      "location":{
        "lat":52.26,
        "lon":-7.1
      },
      "name":"Park Rd Shop",
      "phone":[
        "051852641"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "42 The Quay",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":2,
      "hours":[
        "07:00 - 22:00",
        "08:00 - 22:00",
        "09:00 - 21:00"
      ],
      "location":{
        "lat":52.24,
        "lon":-7.11
      },
      "name":"Quay Shop",
      "phone":[
        "051841626"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Waterford Regional TC",
        "Cork Road",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":3,
      "hours":[
        "09:00 - 18:00 Thurs/Fri: 09:00",
        "09:00 - 18:00",
        "12:00 - 18:00"
      ],
      "location":{
        "lat":52.24,
        "lon":-7.16
      },
      "name":"College Shop",
      "phone":[
        "051302621"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "The Quay",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":3,
      "hours":[
        "07:30 - 19:30",
        "07:30 - 19:30",
        "07:30 - 19:30"
      ],
      "location":{
        "lat":52.24,
        "lon":-7.08
      },
      "name":"Quay Shop 2",
      "phone":[
        "051841626",
        "0861288453"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Cork Road",
        "Waterford City",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":3,
      "hours":[
        "07:00 - 23:00",
        "07:00 - 23:00",
        "08:00 - 23:00"
      ],
      "location":{
        "lat":52.24,
        "lon":-7.16
      },
      "name":"Village Shop",
      "phone":[
        "051854363"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Farren Park",
        "Upper Grange Road",
        "Waterford City"
      ],
      "county":"Co Waterford",
      "distance":3,
      "hours":[
        "08:00 - 22:00",
        "08:00 - 22:00",
        "08:00 - 22:00"
      ],
      "location":{
        "lat":52.24,
        "lon":-7.09
      },
      "name":"Farren Shop",
      "phone":[
        "51856296"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Unit 9 Brasscock Street",
        "Ballinakill",
        "Ballinakill"
      ],
      "county":"Co Waterford",
      "distance":4,
      "hours":[
        "07:00 - 22:00",
        "08:00 - 22:00",
        "08:00 - 22:00"
      ],
      "location":{
        "lat":52.25,
        "lon":-7.07
      },
      "name":"Ballinakill Shop",
      "phone":[
        "51820172"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Riverstown",
        "Tramore",
        "Tramore"
      ],
      "county":"Co Waterford",
      "distance":10,
      "hours":[
        "07:30 - 21:30",
        "07:30 - 21:30",
        "07:30 - 21:30"
      ],
      "location":{
        "lat":52.16,
        "lon":-7.14
      },
      "name":"Tramore Shop",
      "phone":[
        "051390289"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books"
      ]
    },
    {
      "address":[
        "Brown Street",
        "Portlaw",
        "Portlaw"
      ],
      "county":"Co Waterford",
      "distance":13,
      "hours":[
        "07:30 - 21:30",
        "07:30 - 21:30",
        "08:30 - 21:30"
      ],
      "location":{
        "lat":52.29,
        "lon":-7.31
      },
      "name":"Kiely's Shop",
      "phone":[
        "51387654"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Bridge House",
        "Portlaw",
        "Portlaw"
      ],
      "county":"Co Waterford",
      "distance":13,
      "hours":[
        "07:00 - 18:00",
        "08:00 - 18:00",
        "08:00 - 13:00"
      ],
      "location":{
        "lat":52.29,
        "lon":-7.31
      },
      "name":"Fogarty's Shop",
      "phone":[
        "51387061"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books"
      ]
    },
    {
      "address":[
        "Unit 4 Dock Road",
        "Dunmore East",
        "Dunmore East"
      ],
      "county":"Co Waterford",
      "distance":15,
      "hours":[
        "07:30 - 20:00",
        "07:30 - 20:00",
        "07:30 - 20:00"
      ],
      "location":{
        "lat":52.15,
        "lon":-6.99
      },
      "name":"Dingley's",
      "phone":[
        "051383372"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Ring",
        "Dungarvan",
        "Dungarvan"
      ],
      "county":"Co Waterford",
      "distance":37,
      "hours":[
        "08:00 - 21:00",
        "08:00 - 20:30",
        "08:00 - 20:30"
      ],
      "location":{
        "lat":52.07,
        "lon":-7.58
      },
      "name":"Spar An Rinn",
      "phone":[
        "5846010"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "The Quay",
        "Dungarvan",
        "Dungarvan"
      ],
      "county":"Co Waterford",
      "distance":38,
      "hours":[
        "08:00 - 21:00",
        "08:00 - 21:00",
        "08:00 - 20:00"
      ],
      "location":{
        "lat":52.09,
        "lon":-7.62
      },
      "name":"SuperValu Dungarvan",
      "phone":[
        "05841754"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Kilrush",
        "Dungarvan",
        "Dungarvan"
      ],
      "county":"Co Waterford",
      "distance":39,
      "hours":[
        "06:00 - 00:00",
        "06:00 - 00:00",
        "06:00 - 00:00"
      ],
      "location":{
        "lat":52.09,
        "lon":-7.64
      },
      "name":"Mace Kilrush",
      "phone":[
        "05842998"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Clodagh Road",
        "Dungarvan",
        "Dungarvan"
      ],
      "county":"Co Waterford",
      "distance":39,
      "hours":[
        "08:00 - 22:00",
        "08:00 - 22:00",
        "08:00 - 22:00"
      ],
      "location":{
        "lat":52.09,
        "lon":-7.63
      },
      "name":"Centra Dungarvan",
      "phone":[
        ""
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    },
    {
      "address":[
        "Ballyrafter",
        "Lismore",
        "Lismore"
      ],
      "county":"Co Waterford",
      "distance":56,
      "hours":[
        "07:30 - 21:30",
        "09:00 - 21:00",
        "09:00 - 21:00"
      ],
      "location":{
        "lat":52.14,
        "lon":-7.93
      },
      "name":"Mace Ballyrafter",
      "phone":[
        "05854665"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "The Wine Vaults",
        "Lismore",
        "Lismore"
      ],
      "county":"Co Waterford",
      "distance":56,
      "hours":[
        "08:00 - 21:00",
        "08:00 - 21:00",
        "08:00 - 20:00"
      ],
      "location":{
        "lat":52.14,
        "lon":-7.93
      },
      "name":"Londis Lismore",
      "phone":[
        "05854279"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Main Street",
        "Tallow",
        "Tallow"
      ],
      "county":"Co Waterford",
      "distance":63,
      "hours":[
        "08:00 - 21:00",
        "08:00 - 21:00",
        "08:00 - 14:00"
      ],
      "location":{
        "lat":52.09,
        "lon":-8.01
      },
      "name":"Spar Tallow",
      "phone":[
        "5856215"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Main Street",
        "Ballyduff",
        "Ballyduff"
      ],
      "county":"Co Waterford",
      "distance":65,
      "hours":[
        "09:00 - 20:00 Fri: 09:00 - 21:",
        "09:00 - 20:00",
        "09:00 - 13:00"
      ],
      "location":{
        "lat":52.15,
        "lon":-8.06
      },
      "name":"Mace Ballyduff",
      "phone":[
        "0667131130"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Lego",
        "Books",
        "Cards",
        "Comics"
      ]
    },
    {
      "address":[
        "Abbey Park",
        "Ferrybank",
        "Ferrybank"
      ],
      "county":"Co Waterford",
      "distance":5848,
      "hours":[
        "",
        "",
        ""
      ],
      "location":{
        "lat":0,
        "lon":0
      },
      "name":"McGraths Daybreak",
      "phone":[
        "051830644"
      ],
      "products":[
        "Dolls",
        "Trucks",
        "Cars",
        "Footballs",
        "Bikes",
        "Skateboards",
        "Lego",
        "Books",
        "Cards"
      ]
    }
];
      
/*
 * Get all stores that match the given query
 */
exports.findStores = function (query, callback) {
  console.log("In findStores.. query: " + util.inspect(query));
  var self = this, opts, res, qi, ql, qt;
  opts = {
    act: 'list',
    type: 'Store'
  };

  if (query.eq && query.eq.length > 0) {
    opts.eq = {};
    for (qi = 0, ql = query.eq.length; qi < ql; qi += 1) {
      qt = query.eq[qi];
      opts.eq[qt.name] = qt.value;
    }
  }
  
  if (query.contains && query.contains.length > 0) {
    opts.like = {};
    for (qi = 0, ql = query.contains.length; qi < ql; qi += 1) {
      qt = query.contains[qi];
      opts.like[qt.name] = ".*" + qt.value + ".*";
    }
  }
   
  if (CONFIG.boundingBox && query.location && query.applyLocationFilter) {
    // apply bounding box restriction
    opts.ge = {
      'location.lat': Math.round((query.location.lat - CONFIG.boundingBoxLat) * 100) / 100,
      'location.lon': Math.round((query.location.lon - CONFIG.boundingBoxLon) * 100) / 100
    };
    opts.le = {
      'location.lat': Math.round((query.location.lat + CONFIG.boundingBoxLat) * 100) / 100,
      'location.lon': Math.round((query.location.lon + CONFIG.boundingBoxLon) * 100) / 100
    };
  }
    
  var t = Date.now();
   
  
  // Note: replace sample data here
  /*
  addStoresDistance(res.list, query, function (err, pStores) {
    self.sortStores(pStores, function (err, sStores) {
      limitStores(sStores, query, function (err, lStores) {
        callback(err, lStores);
      });
    });
  });
  */
  callback(undefined, sampleResponse);
};
  
// limit number of stores returned  
function limitStores(stores, query, callback) {
  var limited = [], limit = CONFIG.storeLimit;
    
  if (query.limit && 'number' === typeof query.limit) {
    limit = query.limit;
  }
  if (limit > 0) {
    limited = stores.splice(0, limit); 
  }
  else { // no limit if 0
    limited = stores;
  }
   
  callback(null, limited);
};
  
/*
 * Add distance between queried point and store location for each store
 * and coresponding county for county id
 * Note: also sorts stores by distance ascending
 */
function addStoresDistance(stores, query, callback) {
  var self = this, pStores = [], si, sl, st, lat, lon, checkDistance = false, fromPoint = null, toPoint = null;
   
  lat = query.location ? query.location.lat : undefined;
  lon = query.location ? query.location.lon : undefined;
    
  checkDistance = typeof lat !== 'undefined' ? true : false;
  if (checkDistance) {
    fromPoint = new Point(lat, lon);
      
    for (si = 0, sl = stores.length; si < sl; si += 1) {
      st = stores[si].fields;        
      toPoint = new Point(st.location.lat, st.location.lon);
      st.distance = Math.round(fromPoint.distanceTo(toPoint));
      pStores.push(st);
    }
  }
  else {
    pStores = stores;
  }
    
  callback(null, pStores);
};
  
function sortStores(stores, callback) {
  // sort by distance 
  stores.sort(function (a, b) {
    return a.distance - b.distance;
  });
  callback(null, stores);
};
