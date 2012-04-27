var expect = require('chai').expect;
var JSC = require('../support/jscheck').JSC;
var claim = require('../lib/stretch').claim;

var lessThanOrEqual = function (a, b) {
  return a <= b;
}

describe("claim(...)", function () {
  it("should pass for correct claims", function () {
    var testCase = function () {
      claim("Less than or equal to", lessThanOrEqual, [JSC.integer(10), JSC.integer(10,20)]);
    };
    expect(testCase).to.not.throw();
  });

  it("should raise for incorrect claims", function () {
    var failureCase = function () {
      claim("Failure case", lessThanOrEqual, [JSC.integer(10), JSC.integer(20)]);
    };
    expect(failureCase).to.throw();
  });

  it("should chain claim(desc, fn) w/ .passes()");
  it("should chain claim(desc, fn) w/ fails()");
  it("should optionally exclude description");
});

describe("stretch(...)", function () {
  it("should intelligentally return specifiers");
});
