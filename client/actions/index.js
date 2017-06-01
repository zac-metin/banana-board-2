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
