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
  var query = params.query;
  
  // TODO: cache results based on query string  
  storesController.findStores(query, function (err, data) {
    var result = formatResult(err, data);
    return callback(err, result);
  });
};

