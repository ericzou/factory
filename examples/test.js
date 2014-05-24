var x = require ('../src/x.js');

console.log('x', x)
console.log('x', x.createFactory())

var basicFactory = x.createFactory();

console.log("basic factory should be empty hash:", basicFactory());

basicFactory.attr('id', 10);

console.log("set id to 10:", basicFactory());

var userFactory = x.createFactory({
  id: 10,
  name: 'blah'
});

console.log("create a user ", userFactory())


userFactory.attr('age', function () {
  return Math.floor(Math.random()*100);
})

  console.log("create a user with random age ", userFactory())
