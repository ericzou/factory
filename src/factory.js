function createFactory() {
  var blueprint = {}
  return factory(blueprint);
}

function factory (blueprint) {
  var blueprint = blueprint;
  return function() {
    return blueprint;
  }
}

factory.attr = function(key, value) {
  blueprint[key] = value;
  return factory;
}

module.exports = function createFactory() {
  factory.blueprint = {}
  return factory;
};
