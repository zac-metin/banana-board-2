
const getTasks = (db) => {
  return db('tasks')
    .select('*')
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

const addTask = (db, task) => {
  return db('tasks')
  .insert({
      taskName: task.taskName,
      description: task.description,
      completionStatus: 0,
      complexity: task.complexity,
      userName: task.userName
    })
}

const getProjects = (db) => {
  return db('projects')
    .select('*')
}


const addProject = (project, db) => {
  return db('projects')
  .insert({
      name: project.name,
    })
}

const editProject = (project, db) => {
  return db('projects')
    .where('id', project.id)
    .update({
      name: project.name,
    })
}

const delProject = (project_id, db) => {
  return db('projects')
    .where('id', project.id)
    .update({
      name: project.name,
    })
}

module.exports = {
  getTasks,
  updateTask,
  addTask,
  getProjects,
  addProject,
  editProject
}
