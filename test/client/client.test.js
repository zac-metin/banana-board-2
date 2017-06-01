import test from 'ava'
import React from 'react'
import {shallow, mount, render} from 'enzyme'

import './setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}



test('App-Container class exists', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('.app-container').exists(), true)
})
