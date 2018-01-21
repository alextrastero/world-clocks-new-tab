import React from 'react'
import Clocks from '../Clocks/'
import ZoneChooser from '../ZoneChooser/'

import './App.css'

class App extends React.Component {
  get zones () {
    return [
      { title: 'Los Angeles', timezone: 'America/Los_Angeles' },
      { title: 'Berlin', timezone: 'Europe/Berlin' }
    ]
  }

  render () {
    return (
      <div className='app'>
        <ZoneChooser />
        <Clocks zones={this.zones} />
      </div>
    )
  }
}

export default App
