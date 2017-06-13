const getTasks = (db) => {
  return db('tasks')
    .select('*')
}
const getColumns = (db) => {
  return db('projectColumns')
    .select('*')
}
const getTasksByProjectId = (db,project_id) => {
  return db('tasks')
    .where('project_id', project_id)
}

const getColumnsByProjectId = (db, project_id) => {
  return db('projectColumns')
    .where('project_id', project_id)
}

const updateTask = (db, task) => {
  return db('tasks')
  .where('id', task.id)
  .first()
  .then((res) => {
    return db('tasks')
    .where('id', task.id)
    .update({
      completionStatus: task.completionStatus,
      id: task.id,
      taskName: task.taskName,
      description: task.description,
       user_id: task.user_id,
       userName: task.userName
    })
  })
}

const addTask = (task, db) => {
  return db('tasks')
  .insert(task)
  }

const getProjects = (db) => {
  return db('projects')
    .select('*')
}

const addProject = (project_name, db) => {
  return db('projects')
  .insert({
      name: project_name,
    })
}
const addProjectColumns = (project_id, columns, db) => {

  const columnsToInsert = columns.map(column => Object.assign({},column,{project_id}))
  return db('projectColumns')
  .insert(columnsToInsert)
}

const editProject = (project, db) => {
  return db('projects')
    .where('id', project.id)
    .update({
      name: project.name
    })
}

const delProject = (project_id, db) => {
  return db('projects')
    .where('id', project.id)
    .del()
}

const editColumn = ({id, column_name}, db) => {
  return db('projectColumns')
  .where('id', id)
  .update({column_name})
}

module.exports = {
  getTasks,
  updateTask,
  addTask,
  getProjects,
  addProject,
  editProject,
  getTasksByProjectId,
  getColumnsByProjectId,
  addProjectColumns,
  editColumn
}
