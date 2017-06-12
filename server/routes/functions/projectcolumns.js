const tasksDB = require('../../db')

const post = (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.editColumn(req.body.project_name,connection)
    .then((columns) => {
      res.sendStatus(201)
    })
}
