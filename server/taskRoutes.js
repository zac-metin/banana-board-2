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

router.put('/:id', (req,res) => {
  console.log("llalalala");
  let db = req.app.get('db')
  tasksDB.updateTaskRight(db, req.params.id)
  .then(() => {
    console.log("Ticket moved left");
  })
})

module.exports = router
