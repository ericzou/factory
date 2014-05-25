var chai = require('chai');
var expect = chai.expect;
var x = require('../src/x');

describe('x', function () {
  describe('#createFactory', function () {
    it ('returns a factory function', function () {
      expect(x.createFactory()).to.be.a('function');
    });
  });

  describe('#defineFactory', function (argument) {
    beforeEach(function () {
      x.defineFactory('user', {
        id: 10,
        name: 'John'
      });
    });

    it('creates and registers a new factory', function () {
      expect(x.factory('user')).to.be.ok;
    });

    it('passes blueprint to the factory', function () {
      var factory = x.factory('user');
      expect(factory()).to.eql({ id: 10, name: 'John'});
    });
  });

  describe('#factory', function () {
    it('throws error if factory not found', function () {
      expect(function () {
        return x.factory('notRegistered')
      }).to.throw(/Factory notRegistered is not defined/);
    })
  });
})
