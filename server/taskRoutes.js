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
  let db = req.app.get('db')
  tasksDB.updateTask(db, req.body)
  .then(() => {
    res.sendStatus(202)
  })
})

router.post('/', (req, res) => {
 let db = req.app.get('db')
 tasksDB.addTask(db, req.body)
   .then((task) => {
     res.status(201).json(task[0])
   })
})


module.exports = router
