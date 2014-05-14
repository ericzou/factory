var factory = function() {}
var blueprints = {};

// fb.define(:user, {
//   id: idGenerator
// })

factory.define = function(name, options) {
  blueprints[name] = options;
}

// factory.create('user')
factory.create = function(name) {
  var blueprint = blueprints[name]
  return createFactory(blueprint)
}

// userFactory.attr('name', 12)
factory.attr = function (attr, value) {
  factory.blueprint[attr] = value
  return factory
}

function createFactory(blueprint) {
  if (!blueprint) {
    blueprint = {}
  }
  return factory
}

// api
