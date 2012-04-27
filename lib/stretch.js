var mocha = require('mocha');
var JSC = require('../support/jscheck').JSC;

exports.version = require('../package').version;

exports.claim = function (msg, predicate) {
  // ...
  //
  // returns proxy fn that accepts passes or fails as terminator
}
