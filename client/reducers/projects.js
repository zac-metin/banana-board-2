
const initialState = []

function projects(state = initialState, action) {
   switch (action.type) {
     case 'RECEIVE_PROJECTS':
     return [...action.projects]

    default: return state
  }
}

export default projects
