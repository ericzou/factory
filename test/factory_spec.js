var chai = require('chai');
var expect = chai.expect;
var factory = require('../src/factory.js');

describe('Factory', function () {
  it('should be defined', function () {
    expect(factory).to.be.a('function')
  });
});