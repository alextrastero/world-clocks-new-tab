import React from 'react'
import { shallow } from 'enzyme'

describe('<Settings />', function () {
  let Settings
  let wrapper
  const updateMock = jest.fn()
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }

  beforeEach(() => {
    Settings = require('./index').default
    wrapper = shallow(<Settings updateSettings={updateMock} zone={berlinTimezone} />)
  })

  it('should render without throwing an error', () => {
    expect(wrapper).toBeDefined()
  })

  it('renders `.settings`', () => {
    expect(wrapper.find('.settings').length).toBe(1)
  })

  it('renders a form', () => {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('handles change on each select', () => {
    const select = wrapper.find('select').first()
    select.simulate('change', {
      target: { name: 'body', value: '777' }
    })
    expect(wrapper.state().settings).toMatchObject({ body: 777 })
  })

  describe('form', () => {
    beforeEach(() => {
      Settings = require('./index').default
      wrapper = shallow(<Settings updateSettings={updateMock} zone={berlinTimezone} />)
    })

    it('updates settings on submit', () => {
      const form = wrapper.find('form')
      const select = wrapper.find('select').first()
      select.simulate('change', {
        target: { name: 'body', value: '999' }
      })
      form.simulate('submit', { preventDefault: () => {} })
      expect(updateMock.mock.calls[0][0]).toMatchObject({
        'settings': {
          'body': 999
        }
      })
    })

    it('handles random settings', () => {
      const form = wrapper.find('form')
      const randomBtn = form.find('input').first()
      const prevState = wrapper.state().settings

      randomBtn.simulate('click')
      expect(wrapper.state().settings).not.toMatchObject(prevState)
    })
  })
})
