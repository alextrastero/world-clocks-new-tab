import React from 'react'
import { shallow } from 'enzyme'

describe('<Clocks />', function () {
  let Clocks
  let wrapper
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }
  const keralaTimezone = { title: 'Kerala', timezone: 'Asia/Calcutta' }

  beforeEach(() => {
    Clocks = require('./index').default
    wrapper = shallow(<Clocks timezones={[berlinTimezone, keralaTimezone]} />)
  })

  it('should render without throwing an error', () => {
    expect(wrapper).toBeDefined()
  })

  it('renders `.clocks`', () => {
    expect(wrapper.is('.clocks')).toBe(true)
  })

  it('renders as many clocks as timezones', () => {
    expect(wrapper.find('Clock').length).toBe(2)
  })
})
