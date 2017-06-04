
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
    })
}



module.exports = {
  getTasks,
  updateTask,
  addTask
}
