const tasksDB = require('./db')

const get = (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.getProjects(connection)
    .then(projects => {
      res.json(projects)
    })
}

const post = (req, res) => {
  let connection = req.app.get('connection')
  console.log(req.body);
  tasksDB.addProject(req.body,connection)
    .then((project) => {
      res.status(201).json(project[0])
    })
}

const put = (req, res) => {
  let project_id = req.params.project_id
  tasksDB.editProject(req.body,connection)
  .then(() => {
    res.sendStatus(202)
  })
}

const del = (req, res) => {
  let project_id = req.params.project_id
  res.sendStatus(200)
}


module.exports = {
  get, post, put, del
}
