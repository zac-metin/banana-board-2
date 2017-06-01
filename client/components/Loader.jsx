import React from 'react'
import {connect} from 'react-redux'
import {getTasks} from '../actions/index'

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dispatch: props.dispatch
    }
  }
  componentDidMount() {
    this.state.dispatch(getTasks())
  }
  render() {
    return <div className="Loader"></div>
  }
}
Loader = connect()(Loader)

export default Loader
