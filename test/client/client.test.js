import test from 'ava'
import React from 'react'
import {Provider} from 'react-redux'
import {shallow, mount, render} from 'enzyme'

import './setup-dom'
import store from './setup-store'
import App from '../../client/components/App'
import Board from '../../client/components/Board'

App.prototype.componentDidMount = () => {}



test('App-Container class exists', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('.app-container').exists(), true)
})

test('App-Container renders Board', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('.Board').exists(), true)
})

test('App-Container renders Task', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('.Task').exists(), true)
})

test('Board Renders', t => {
  const wrapper = mount(<Board store={store}/>)
  t.is(wrapper.find('.Board').exists(), true)
})

test('Board renders Task', t => {
  const wrapper = mount(<Board store={store}/>)
  t.is(wrapper.find('.Task').exists(), true)
})
