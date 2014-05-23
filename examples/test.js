var x = require ('../src/x.js');

console.log('x', x)
console.log('x', x.createFactory())

var basicFactory = x.createFactory();

console.log("basic factory should be empty hash:", basicFactory());

basicFactory.attr('id', 10);

console.log("set id to 10:", basicFactory());

var anotherFactory = x.createFactory();

console.log("another factory should be empty hash:", anotherFactory());

