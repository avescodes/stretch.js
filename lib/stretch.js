var mocha = require('mocha');
var JSC = require('../support/jscheck').JSC;
var _ = require ('underscore');

exports.version = require('../package').version;

// TODO: make specifiers not have to be an array
exports.claim = function (description, predicate, specifiers) {
  var checkResults = [];
  var report;

  JSC.clear();
  JSC.on_pass(function (object) { checkResults.push(object); });
  JSC.on_fail(function (object) { checkResults.push(object); });
  JSC.on_report(function (string) { report = string; });

  JSC.test(description, predicate, specifiers);

  var allPassed = _.all(checkResults, function (o) {
    return o.pass;
  });

  if(allPassed) {
    return true;
  } else {
    throw new Error("Not all cases passed");
  }
};
