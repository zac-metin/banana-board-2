import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../../client/reducers'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
