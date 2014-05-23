
var factory = function () {
  var blueprint = {};

  function factory() {
    return blueprint;
  }

  factory.attr = function (key, value) {
    blueprint[key] = value;
    return factory;
  }

  return factory;
}

module.exports = factory;