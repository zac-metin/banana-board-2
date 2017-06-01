import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export const toggleStatus = (task) => {
  return {
    type: 'TOGGLE_STATUS',
    id: task.id
  }
}

export const updateStatus = (task) => {
  return (dispatch) => {

    request
      .put('/api/tasks')
      .send(task)
      .end((err, res) => {
        console.log({res: res.body});
        if (!err) dispatch({type: 'TOGGLE_STATUS', id: task.id})
      })

  }
}
