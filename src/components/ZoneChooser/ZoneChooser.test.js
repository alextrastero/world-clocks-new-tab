import React from 'react'
import { shallow, mount, render } from 'enzyme'

describe('<ZoneChooser />', function () {
  let ZoneChooser
  let wrapper
  let form
  const updateMock = jest.fn()
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }
  const keralaTimezone = { title: 'Kerala', timezone: 'Asia/Calcutta' }
  const timezones = [berlinTimezone, keralaTimezone]

  const formEvent = (title, timezone) => ({
    target: {
      title: { value: title },
      timezone: { value: timezone }
    }
  })

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

  describe('zone list', () => {
    ZoneChooser = require('./index').default
    wrapper = mount(<ZoneChooser timezones={timezones} updateTimezones={updateMock} />)

    it('renders one zone per timezone', () => {
      expect(wrapper.find('button').length).toBe(timezones.length + 1)
    })
  })

  describe('form', () => {
    beforeEach(() => {
      ZoneChooser = require('./index').default
      wrapper = mount(<ZoneChooser timezones={timezones} updateTimezones={updateMock} />)
      form = wrapper.find('form')
    })

    it('renders', () => {
      expect(form.children().length).toBe(3)
    })

    it('handles errors#no-errors', () => {
      form.simulate('submit', formEvent('LA', 'America/Los_Angeles'))
      expect(wrapper.state().error).toEqual({})
    })

    it('handles errors#empty', () => {
      form.simulate('submit', formEvent())
      expect(wrapper.state().error.code).toBe(1)
    })

    it('handles errors#alread-exists', () => {
      form.simulate('submit', formEvent('Berlin', 'Europe/Berlin'))
      expect(wrapper.state().error.code).toBe(2)
    })

    it('handles errors#wrong-timezone', () => {
      form.simulate('submit', formEvent('Berlin', 'Foo/Bar'))
      expect(wrapper.state().error.code).toBe(3)
    })
  })
})
