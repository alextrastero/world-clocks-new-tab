import React from 'react'
import { shallow } from 'enzyme'
import localStorage from 'localStorage'

jest.mock('localStorage')

describe('<App />', function () {
  let getItemMock
  let setItemMock

  describe('with one timezone', () => {
    let App
    beforeEach(() => {
      localStorage.getItem.mockReset() // or restore? or something else
      localStorage.getItem.mockImplementation(
        jest.fn(() => JSON.stringify( [ { title: 'Berlin', timezone: 'Europe/Berlin' } ]))
      )
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
