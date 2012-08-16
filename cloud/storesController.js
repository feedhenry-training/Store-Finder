var CONFIG = require("./config.js");
var sampleResponse = require("./sampledata.js").sampleResponse;
      
/*
 * Get all stores that match the given query
 */
exports.findStores = function (query, callback) {
  var util = require('util');
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
