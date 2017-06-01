var express = require('express')
var router = express.Router()

var tasksDB = require('./db')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  tasksDB.getTasks(db)
    .then(tasks => {
      res.json(tasks)
    })
})

module.exports = router
