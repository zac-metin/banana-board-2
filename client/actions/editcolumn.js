import request from 'superagent'

export const editColumn = (id, name) => {
  return {
    type: 'EDIT_COLUMN',
    id,
    name
  }
}

export const updateColumn = (id, newName) => {
  return (dispatch) => {
    console.log('actions', {id, newName});
    request
      .post('/api/projectcolumns')
      .send({id, column_name: newName})
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log(res+"is this empty??");
        dispatch(editColumn(id, newName))
      }
      })
  }
}
