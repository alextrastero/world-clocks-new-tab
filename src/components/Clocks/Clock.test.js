import React from 'react'
import { shallow } from 'enzyme'

describe('<Clock />', function () {
  let Clock
  let wrapper
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }

  describe('With a timezone', () => {
    beforeEach(() => {
      Clock = require('./Clock').default
      wrapper = shallow(<Clock zone={berlinTimezone} />)
    })

    it('should render without throwing an error', () => {
      expect(wrapper).toBeDefined()
    })

    it('renders', () => {
      expect(wrapper.is('.clocks__clock')).toBe(true)
      expect(wrapper.find('.clocks__clock canvas').length).toBe(1)
    })

    it('renders a title', () => {
      expect(wrapper.find('.clocks__clock-timezone').text())
        .toEqual(berlinTimezone.title)
    })
  })

  describe('Without a timezone', () => {
    beforeEach(() => {
      Clock = require('./Clock').default
      wrapper = shallow(<Clock />)
    })

    it('should render without throwing an error', () => {
      expect(wrapper).toBeDefined()
    })

    it('renders', () => {
      expect(wrapper.is('.clocks__clock')).toBe(true)
      expect(wrapper.find('.clocks__clock canvas').length).toBe(1)
    })

    it('doesn\t render a title', () => {
      expect(wrapper.find('.clocks__clock-timezone').length)
        .toBe(0)
    })
  })
})
