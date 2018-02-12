import React from 'react'
import { shallow } from 'enzyme'

import App from './index'

describe('<App />', function () {
  it('should render without throwing an error', function () {
    shallow(<App />)
    expect(1).toEqual(1)
    // expect(shallow(<App />).contains(<div className='foo'>Bar</div>)).toBe(true)
    // expect(shallow(<Foo />).is('.foo')).toBe(true)
    // expect(mount(<Foo />).find('.foo').length).toBe(1)
    // expect(render(<Foo />).text()).toEqual('Bar')
  })
})
