var main = require('../main'),
assert = require('assert');

main.findStores({ query: '' }, function(err, res){
  console.log("findStores: Running tests");
  assert.ok(!err);
  assert.ok(res);
  assert.ok(res.data);
  assert.ok(res.data.length > 0);
  var data = res.data,
  aRecord = data[0];
  assert.ok(aRecord);
  assert.ok(aRecord.county);
  assert.ok(aRecord.address && typeof aRecord.address === "object");
  assert.ok(aRecord.distance && typeof aRecord.distance === "number");
  console.log("findStores: Tests passed OK.");
});