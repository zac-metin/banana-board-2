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



export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects
  }
}
export const getProjects = () => {
  return (dispatch) => {
    request
      .get('/api/projects')
      .end((err, res) => {
        console.log(res.body);
        if (!err) dispatch(receiveProjects(res.body))
      })
  }
}


export const receiveProjectsTasks = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS_TASKS',
    projects
  }
}

export const getProjectsTasks = (project_id) => {
  return (dispatch) => {
    request
      .get(`/api/projects/${project_id}/tasks`)
      .end((err, res) => {
        console.log(res.body);
        if (!err) dispatch(receiveProjects(res.body))
      })
  }
}
