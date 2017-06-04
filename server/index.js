var createServer = require('./server')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')
var config = require('../knexfile')[env]
var connection = knex(config)

var server = createServer(connection)

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
