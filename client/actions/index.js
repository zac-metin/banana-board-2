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
      .put(`/api/tasks/${task, task.id}`)
      .send(newTask)
      .end((err, res) => {
        if (!err) dispatch(getTasks())
      })
  }
}

export const addTask = (newTask) => {
  console.log(newTask);
  return (dispatch) => {
    request
      .post('/api/tasks/')
      .send(newTask)
      .end((err, res) => {
        if (!err) dispatch(getTasks())
      })
  }
}
