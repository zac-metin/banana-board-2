const tasksDB = require('../../db')

const get = (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.getTasks(connection)
    .then(projects => {
      res.json(projects)
    })
}

const post = (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.addTask(req.body, connection)
    .then((task_id) => {
      res.status(201).json(task_id[0])
    })
}

const put = (req, res) => {
  let project_id = req.params.project_id
  tasksDB.editTask(req.body,connection)
  .then(() => {
    res.sendStatus(202)
  })
}

const del = (req, res) => {
  let task_id = req.params.project_id
  res.sendStatus(200)
}


module.exports = {
  get, post, put, del
}
