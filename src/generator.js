var idGenerator = require('./generators/id');
var nameGenerator = require('./generators/name');

var generator = {
  add: function (name, fn) {
    generator[name] = fn;
  }
};

generator.add('id', idGenerator);
generator.add('name', nameGenerator);

module.exports = generator;