var expect = require('chai').expect;
var JSC = require('../support/jscheck').JSC;
var claim = require('../lib/stretch').claim;

describe("stretch.js", function () {
  it("should have access to JSC", function () {
    expect(JSC).to.not.equal(undefined);
  });

  it("has a cool DSL", function () {
    // claim("descriptor", predicateFn).passes(specifiers, [classifierFn])
    // claim("descriptor", predicateFn).fails(specifiers, [classifierFn])
  });

  it("exposes simplified specifiers", function () {
    // stretch.prime() => JSC.integer()
    // stretch(n) => JSC.integer(n)
    //
    // JSC.boolean() => 
    // JSC.boolean(bias) => 
    // JSC.character(code) => 
    // JSC.character(min_character, max_character) => 
    // JSC.integer() => 
    // JSC.integer(i) => 
    // JSC.integer(i, j) => 
    // JSC.literal(value) => 
    // JSC.number(x) => 
    // JSC.number(x, y) => 
    // JSC.object(object) => 
    // JSC.object(keys, values) => 

    // JSC.object(
    //     JSC.array(JSC.integer(3, 8), JSC.string(4, JSC.character('a', 'z'))),
    //     JSC.boolean()
    // )
    // JSC.one_of(array) => stretch.one_of(...)
    // JSC.one_of(array, weights) => stretch.one_of(array, weights)
    // JSC.sequence(array) => 
    // JSC.string(value) => stretch.string(value)
    // JSC.string(JSC.integer(1000, 9999)) => 
  });
});
