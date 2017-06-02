
const getTasks = (db) => {
  return db('tasks')
    .select('*')
}

const updateTaskRight = (db, task_id) => {
  return db('tasks')
  .where('id', task_id)
  .first()
  .then((res) => {
    return db('tasks')
    .where('id', task_id)
    .update({
      completionStatus: res.completionStatus+1
    })

  })
}
const updateTaskLeft = (db, task_id) => {
  return db('tasks')
  .where('id', task_id)
  .first()
  .then((res) => {
    return db('tasks')
    .where('id', task_id)
    .update({
      completionStatus: res.completionStatus-1
    })

  })
}



module.exports = {
  getTasks,
  updateTaskLeft,
  updateTaskRight
}
