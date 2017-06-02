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

export const toggleStatus = (task) => {
  return {
    type: 'TOGGLE_STATUS',
    id: task.id
  }
}

export const updateStatusLeft = (task) => {
  return (dispatch) => {
    request
      .put(`/api/tasks/${task.id}`)
      .send(task)
      .end((err, res) => {
        console.log({res: res.body});
        console.log(err);
        if (!err) dispatch(getTasks())
      })
  }
}
