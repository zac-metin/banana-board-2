
var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db')

test('getTasks gets all tasks', function(t) {
  var expected = 4
  return db.getTasks(t.context.connection)
    .then(function(result) {
      var actual = result.length
      t.is(expected, actual)
    })
})


test('addTask adds a single task', function(t) {
  return db.addTask(t.context.connection, {taskName: 'wirte tests', description:'write some db tests'})
    .then((res) => {
      return t.context.connection('tasks').select()
    })
    .then((tasks) => {
      t.is(tasks.length, 5)
    })
})
