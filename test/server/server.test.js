// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')

var app = require('../../server')
var configureDatabase = require('./helpers/database-config')

configureDatabase(test, function (db) {
  app.set('knex', db)
})

test.cb('able to get all tasks', function (t) {
  var expected = 26
  request(app)
    .get('/tasks')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.tasks.length, expected)
      t.end()
    })
})
