const tasksDB = require('./db')

const get = (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.getProjects(connection)
    .then(projects => {
      res.json(projects)
    })
}

const getAll = (req, res) => {
  let pid = req.params.project_id
  let connection = req.app.get('connection')
  tasksDB.getColumnsByProjectId(connection, pid)
    .then(columns => {
      tasksDB.getTasksByProjectId(connection, pid)
      .then((tasks) =>  res.json({columns, tasks})
)
    })
}

const post = (req, res) => {
  const newBody = JSON.parse(req.body.projectString)
  let connection = req.app.get('connection')
  console.log(newBody);
  tasksDB.addProject(newBody.project_name,connection)
  .then((project_ids) => {
    return tasksDB.addProjectColumns(project_ids[0], newBody.columns, connection)
  })
    .then((columns) => {
      console.log('hello');
      res.sendStatus(201)
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
  get, post, put, del, getAll
}
