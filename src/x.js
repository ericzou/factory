var factory = require ('./factory.js');
var generator = require('./generator.js')
var registry = {};


var x = {};

function registerFactory(name, factory) {
  registry[name] = factory;
}

x.createFactory = factory;

x.defineFactory = function (name, blueprint) {
  var factory = x.createFactory(blueprint);
  registerFactory(name, factory);
  return factory;
}

x.factory = function (name) {
  var factory = registry[name]

  if (!factory) {
    throw new Error('Factory ' + name + ' is not defined');
  }

  return factory;
}

x.generator = generator;

module.exports = x;
