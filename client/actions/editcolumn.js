import request from 'superagent'

export const editColumn = (task) => {
  return {
    type: 'EDIT_COLUMN',
    task
  }
}

export const updateColumn = (task) => {
  return (dispatch) => {
    console.log({task});
    request
      .post('/api/projectcolumns')
      .send(task)
      .end((err, res) => {
        if (err) console.log(err);
        else console.log({res: res.body});
        dispatch(editColumn(res.body))
      })
  }
}
