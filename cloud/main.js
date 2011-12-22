var util = require('util');
var storesController = require('./storesController.js');

function formatResult(err, data) {
  var result = {};
  if (err) {
    result.status = 'error';
    result.message = err.message;
  } else {
    result.status = 'ok';
    result.data = data;
  }
  return result;
}

exports.findStores = function(params, callback) {
  console.log("In findStores, params: " + util.inspect(params.query, true, null));
  var query = params.query;
  
  // TODO: cache results based on query string  
  storesController.findStores(query, function (err, data) {
    var result = formatResult(err, data);
    return callback(err, result);
  });
};

/* 
This file - config.js - is used to demonstrate the best practice method for allowing configuration information
to be bundled with the app when it is built, but also allowing the latest version of the configuration to be 
retrieved by the app from the cloud on start up.
*/
exports.getConfig = function(params, callback) {
  var cfg = require("config.js");
  console.log("In getConfig, returning: " + util.inspect(cfg.CONFIG));
  return callback(null, {config: cfg.CONFIG});
};

