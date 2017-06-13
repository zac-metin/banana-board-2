
function projectInfo(state = {columns:[], tasks: [], project_id: null}, action) {
   switch (action.type) {
     case 'RECEIVE_PROJECT_INFO':
     return {...action.projectInfo}

     case 'EDIT_COLUMN':
       let newState = {...state}
       console.log({newState});
       newState.columns.forEach(column => {
         if (column.id == action.id) column.column_name = action.name
       })
      //  newState.column = action.column
       return newState


    default: return state

  }
}

export default projectInfo
