import test from 'ava'
import React from 'react'
import {Provider} from 'react-redux'
import {shallow, mount, render} from 'enzyme'
import nock from 'nock'

import './setup-dom'
import store from './setup-store'
import App from '../../client/components/App'
import TasksContainer from '../../client/containers/TasksContainer'

App.prototype.componentDidMount = () => {}



test('App-Container class exists', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('.app-container').exists(), true)
})

test.cb('App-Container renders TasksContainer', t => {
  const scope = nock('http://localhost:80')
    .get('/api/tasks')
    .reply(200,   [{
      "id": 1,
      "taskName": "create API",
      "description": "set up an API for our project to use",
      "user_id": 1,
      "completionStatus": 0
    }])
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  setTimeout(() => {
    t.is(wrapper.find('.TasksContainer').exists(), true)
    t.end()
  }, 1000)
})

test.cb('Task Container renders a Task', t => {
  const scope = nock('http://localhost:80')
    .get('/api/tasks')
    .reply(200,   [{
      "id": 1,
      "taskName": "create API",
      "description": "set up an API for our project to use",
      "user_id": 1,
      "completionStatus": 0
    }])
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  setTimeout(() => {
    t.is(wrapper.find('.TasksContainer').children().length, 1)
    t.end()
  }, 1000)
})


test.skip('TasksContainer Renders', t => {
  const wrapper = mount(<TasksContainer store={store}/>)
  t.is(wrapper.find('.TasksContainer').exists(), true)
})

test.skip('Board renders Task', t => {
  const wrapper = mount(<TasksContainer store={store}/>)
  t.is(wrapper.find('.Task').exists(), true)
})
