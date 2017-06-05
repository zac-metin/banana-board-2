
const initialState = []

function tasks(state = initialState, action) {
   switch (action.type) {
     case 'RECEIVE_TASKS':
     return [...action.tasks]
    default: return state
  }
}

export default tasks
