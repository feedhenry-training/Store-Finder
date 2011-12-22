(function () {
  "use strict";
  
  App.controllers.storesController = new Ext.Controller({
    /*
     * Returns a store with all stores that match the query
     */
    findByQuery: function (query, callback) {
      var error = {};
      
      $fh.act({
        act: 'findStores',
        req: {
          query: query
        }, 
        secure: false
      }, function (res) {
        if (res && res.status === 'ok') {
          callback(null, res.data);
        }
        else {
          error.message = res.error;
          callback(error);
        }
      }, function (code, errorprops, params) {
        if (CONFIG.sampleStores) {
          setTimeout(function () {
            callback(null, sampleData);          
          }, CONFIG.fakeServerTimeout);
        }
        else {
          error.message = code;
          callback(error);  
        }
      });
    }
  });
}());