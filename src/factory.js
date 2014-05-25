var _ = require('underscore');

var factory = function (bp) {
  var blueprint = bp || {};

  function factory(attributes) {
    var data = {};
    var properties = _.extend(blueprint, attributes);

    _.each(properties, function (value, property) {
      data[property] = _.result(properties, property);
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
