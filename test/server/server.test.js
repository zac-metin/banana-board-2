// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')

var app = require('../../server/server')
var configureDatabase = require('./helpers/database-config')

configureDatabase(test, app)
test.cb('able to get all tasks', function (t) {
  console.log("test");
  var expected = 4
  request(t.context.app)
    .get('/api/tasks')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      console.log("response");
      t.is(res.body.length, expected)
      t.end()
    })
})
