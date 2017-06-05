// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')
var db = require('../../server/db')
var app = require('../../server/server')
var configureDatabase = require('./helpers/database-config')


configureDatabase(test, app)
test.cb('able to get all tasks', function (t) {
  var expected = 6
  request(t.context.app)
    .get('/api/tasks')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.is(res.body.length, expected)
      t.end()
    })
})


test.cb('able to get all projects', function (t) {
  var expected = 2
  request(t.context.app)
    .get('/api/projects')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.is(res.body.length, expected)
      t.end()
    })
})




test('POST /projects', (t) => {
  return request(t.context.app)
    .post('/api/projects')
    .send({
      name: 'bob'
    })
    .expect(201)
    .then(() => {
      return db.getProjects(t.context.connection)
    })
    .then((projects) => {
      t.is(projects.length, 3)
    })


})
