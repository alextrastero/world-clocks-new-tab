import React from 'react'
import { shallow, mount } from 'enzyme'

describe('<ZoneChooser />', function () {
  let ZoneChooser
  let wrapper
  const updateMock = jest.fn()
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }
  const keralaTimezone = { title: 'Kerala', timezone: 'Asia/Calcutta' }
  const timezones = [berlinTimezone, keralaTimezone]

  beforeEach(() => {
    ZoneChooser = require('./index').default
    wrapper = mount(<ZoneChooser timezones={timezones} updateTimezones={updateMock} />)
  })

  it('should render without throwing an error', () => {
    expect(wrapper).toBeDefined()
  })

  it('renders `.zone-chooser`', () => {
    expect(wrapper.find('.zone-chooser').length).toBe(1)
  })

  it('adds an `is-active` class when toggled', () => {
    const trigger = wrapper.find('.zone-chooser__opener a')
    trigger.simulate('click')
    expect(wrapper.find('.zone-chooser').hasClass('is-active')).toBe(true)
  })

  describe('form', () => {
    it('renders', () => {
      // TODO add values to text fields and submit
    })
  })
})
