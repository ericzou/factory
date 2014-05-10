// user
// {
//   age: 1
//   name: 'foo'
// }

var userFactory = factory
  .attr('age', idSequenceGenerator)
  .attr('name', nameGenerator)

factory.create()

userFactory()

userFactory(2)

var json = user()


[
  {
    age: 1
    name: 'foo'
  },
  {
    age: 1
    name: 'foo'
  }
]


var userFactory = factory.node()
  .attr('age', idSequenceGenerator)
  .attr('name', nameGenerator)


var withMetrics = factory.node('metric_sample').
        .attr('type', 'metric')
        .attr('id', idSequenceGenerator)

userFactory()
// {
//   age: 1
//   name: 'foo'
// }

userFactory(2)
// [
//   {
//     age: 1
//     name: 'foo'
//   },
//   {
//     age: 2
//     name: 'bar'
//   }
// ]

factory = userFactory.trait(withMetrics) // or userFactory.attach(withMetrics)
factory()
// {
//   age: 1
//   name: 'foo'
//   metric: { id: 1, type: 'metric' }
// }


var adminFactory = userFactory.attr('admin', true)
adminFactory()
// {
//   age: 1
//   name: 'foo'
//   admin: true
// }


var json = userFactory({ name: 'baz' })
// {
//   age: 1
//   name: 'baz'
// }

function customNames(index) {
  return index > 0 ? 'john' : 'smith';
}

var json = userFactory(2, { name:  customNames })
// [
//   {
//     age: 1
//     name: 'smith'
//   }
//   {
//     age: 1
//     name: 'john'
//   }
// ]
