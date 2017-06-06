
const initialState = []

function tasks(state = initialState, action) {
   switch (action.type) {
     case 'RECEIVE_TASKS':
     return [...action.tasks]

     case 'REMOVE_TASK':
      return state.tasks.filter(task => task.id !== action.taskId)

    default: return state
  }
}

export default tasks
