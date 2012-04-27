var expect = require('chai').expect;
var JSC = require('../support/jscheck').JSC;

describe("stretch.js", function () {
  it("should have access to JSC", function() {
    expect(JSC).to.not.equal(undefined);
  });
});
