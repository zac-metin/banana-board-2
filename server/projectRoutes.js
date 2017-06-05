var express = require('express')
var router = express.Router()

var tasksDB = require('./db')

router.get('/', (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.getProjects(connection)
    .then(projects => {
      res.json(projects)
    })
})

router.post('/', (req, res) => {
  let connection = req.app.get('connection')
  console.log(req.body);
  tasksDB.addProject(req.body,connection)
    .then((project) => {
      res.status(201).json(project[0])
    })
})


module.exports = router
