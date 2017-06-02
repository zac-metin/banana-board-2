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

router.put('/plus/:id', (req,res) => {
  let db = req.app.get('db')
  tasksDB.updateTaskRight(db, req.params.id)
  .then(() => {
    res.sendStatus(202)
  })
})

router.put('/minus/:id', (req,res) => {
  let db = req.app.get('db')
  tasksDB.updateTaskLeft(db, req.params.id)
  .then(() => {
    res.sendStatus(202)
  })
})

module.exports = router
