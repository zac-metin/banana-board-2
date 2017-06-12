var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

var tasks = require('./routes/tasks')
var projects = require('./routes/projects')


const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}


var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/tasks', tasks)
server.use('/api/projects', projects)
server.use('/api/projectcolumns', projectcolumns)

module.exports = (db) => {
  server.set('connection', db)
  return server
}
