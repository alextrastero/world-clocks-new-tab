import React from 'react'
import { shallow } from 'enzyme'

describe('<Settings />', function () {
  let Settings
  let wrapper
  const updateMock = jest.fn()
  const berlinTimezone = { title: 'Berlin', timezone: 'Europe/Berlin' }

  beforeEach(() => {
    Settings = require('./index').default
    wrapper = shallow(<Settings updateSettings={updateMock} timezone={berlinTimezone} />)
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

  it('renders a title', () => {
    expect(wrapper.find('.settings__preview').text())
      .toBe(`Editing: ${berlinTimezone.title}`)
  })

  it('handles change on each select', () => {
    const select = wrapper.find('select').first()
    select.simulate('change', {
      target: { name: 'body', value: '777' }
    })
    expect(wrapper.state()).toMatchObject({ body: 777 })
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

  describe('preview', () => {

  })

  // it('adds an `is-active` class when toggled', () => {
    // const trigger = wrapper.find('.zone-chooser__opener a')
    // trigger.simulate('click')
    // expect(wrapper.find('.zone-chooser').hasClass('is-active')).toBe(true)
  // })

  describe('zone list', () => {
    // ZoneChooser = require('./index').default
    // wrapper = mount(<ZoneChooser timezones={timezones} updateTimezones={updateMock} />)

    // it('renders one zone per timezone', () => {
      // expect(wrapper.find('button').length).toBe(timezones.length + 1)
    // })
  })

  describe('form', () => {
    // beforeEach(() => {
      // ZoneChooser = require('./index').default
      // wrapper = mount(<ZoneChooser timezones={timezones} updateTimezones={updateMock} />)
      // form = wrapper.find('form')
    // })

    // it('renders', () => {
      // expect(form.children().length).toBe(3)
    // })

    // it('calls callback with new timezone plus existing ones', () => {
      // const timezones = wrapper.props().timezones
      // form.simulate('submit', formEvent('LA', 'America/Los_Angeles'))
      // expect(updateMock).toHaveBeenLastCalledWith(
        // timezones.concat({ title: 'LA', timezone: 'America/Los_Angeles'})
      // )
    // })

    // it('handles errors#no-errors', () => {
      // form.simulate('submit', formEvent('LA', 'America/Los_Angeles'))
      // expect(wrapper.state().error).toEqual({})
    // })

    // it('handles errors#empty', () => {
      // form.simulate('submit', formEvent())
      // expect(wrapper.state().error.code).toBe(1)
    // })

    // it('handles errors#alread-exists', () => {
      // form.simulate('submit', formEvent('Berlin', 'Europe/Berlin'))
      // expect(wrapper.state().error.code).toBe(2)
    // })

    // it('handles errors#wrong-timezone', () => {
      // form.simulate('submit', formEvent('Berlin', 'Foo/Bar'))
      // expect(wrapper.state().error.code).toBe(3)
    // })
  })
})
