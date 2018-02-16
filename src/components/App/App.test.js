import React from 'react'
import { shallow } from 'enzyme'
import localStorage from 'localStorage'

jest.mock('localStorage')

describe('<App />', function () {
  let App
  let wrapper
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }

  beforeEach(() => {
    localStorage.getItem.mockReset() // or restore? or something else
    localStorage.getItem.mockImplementation(
      jest.fn(() => JSON.stringify([berlinTimezone]))
    )
    App = require('./index').default
    wrapper = shallow(<App />)
  })

  it('should render without throwing an error', () => {
    expect(wrapper).toBeDefined()
  })

  it('should fetch timezones from localStorage', () => {
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('renders an app', () => {
    expect(wrapper.is('.app')).toBe(true)
  })

  it('updates state with timezones', () => {
    expect(wrapper.state()).toMatchObject({
      'timezones': [berlinTimezone]
    })
  })
})
