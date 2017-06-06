
var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db')

test('getTasks gets all tasks', function(t) {
  var expected = 6
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
      t.is(tasks.length, 7)
    })
})

test('addProject adds a single project', function(t) {
  return db.addProject({name: 'write tests'}, t.context.connection)
    .then((res) => {
      return t.context.connection('projects').select()
    })
    .then((projects) => {
      t.is(projects.length, 3)
    })
})

test('addProjectColumns adds a single project column, or more', function(t) {
  return db.addProjectColumns(2, [{
      column_name: "Hi I am a column",
      column_value: 3,
    },
    {
        column_name: "Intestinal Prolapse",
        column_value: 3,
      }
  ], t.context.connection)
    .then((res) => {
      return t.context.connection('projectColumns').select()
    })
    .then((columns) => {
      t.is(columns.length, 8)
    })
})
