import React from 'react'
import { shallow } from 'enzyme'

describe('<App />', function () {
  let App;
  let localStorage
  let getItemMock
  let setItemMock

  describe('with one timezone', () => {
    beforeEach(() => {
      jest.resetModules()

      setItemMock = jest.fn()
      getItemMock = jest.fn(() => JSON.stringify(
        [
          { title: 'Berlin', timezone: 'Europe/Berlin' }
        ]
      ))

      jest.doMock('localStorage', () => ({
        getItem: getItemMock,
        setItem: setItemMock
      }))

      localStorage = require('localStorage')
      App = require('./index').default
    })

    it('should render without throwing an error', function () {
      shallow(<App />)
      expect(localStorage.getItem).toHaveBeenCalledTimes(1)
      // expect(shallow(<App />).contains(<div className='foo'>Bar</div>)).toBe(true)
      // expect(shallow(<Foo />).is('.foo')).toBe(true)
      // expect(mount(<Foo />).find('.foo').length).toBe(1)
      // expect(render(<Foo />).text()).toEqual('Bar')
    })
  })
})
