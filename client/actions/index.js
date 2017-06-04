import request from 'superagent'

export const receiveTasks = (tasks) => {
  return {
    type: 'RECEIVE_TASKS',
    tasks
  }
}
export const getTasks = () => {
  return (dispatch) => {
    request
      .get('/api/tasks')
      .end((err, res) => {
        if (!err) dispatch(receiveTasks(res.body))
      })
  }
}


export const updateStatus = (task, increment) => {
  let newTask = {...task, completionStatus:task.completionStatus+increment}
  return (dispatch) => {
    request
      .put(`/api/tasks/${task.id}`)
      .send(newTask)
      .end((err, res) => {
        if (!err) dispatch(getTasks())
      })
  }
}
