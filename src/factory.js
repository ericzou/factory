var _ = require('underscore');

var factory = function (bp) {
  var blueprint = bp || {};

  function factory() {
    var data = {};

    _.each(blueprint, function (value, key) {
      data[key] = _.result(blueprint, key);
    });

    return data;
  }

  factory.attr = function (key, value) {
    blueprint[key] = value;
    return factory;
  }

  return factory;
}

module.exports = factory;
