// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')
var db = require('../../server/db')
var app = require('../../server/server')
var configureDatabase = require('./helpers/database-config')

configureDatabase(test, app)

test.cb('able to get all tasks', function(t) {
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


test.cb('able to get a
        .end((err, res) => {
            if (err) throw err
            t.is(res.body.length, expected)
            t.end()
        })
})

var stuff = {
    project_name: 'Fun Day At The Pool',
    columns: [{
        column_name: 'Todo',
        column_value: 0
    }, {
        column_name: 'In Prolapse',
        column_value: 1
    }]
}

var stuffString = JSON.stringify(stuff)

test.cb('POST /projects', (t) => {
    console.log("attempting post test");
    request(t.context.app)
        .post('/api/projects')
        .send({
            projectString: stuffString
        })
        .expect(201)
        .end((err) => {
            console.log('log everywhere');
            db.getProjects(t.context.connection)
                .then((projects) => {
                    console.log('hello', projects);
                    t.is(projects.length, 3)
                    t.end()
                })


        })
})
