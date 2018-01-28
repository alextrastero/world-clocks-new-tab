import React from 'react'
import localStorage from 'localStorage'

import Clocks from '../Clocks/'
import ZoneChooser from '../ZoneChooser/'

import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      timezones: []
    }

    this.addTimezone = this.addTimezone.bind(this)
  }

  get zones () {
    return this.state.timezones
    // return localStorage.getItem('worldClockTimezones') || []
    // [
    // { title: 'Los Angeles', timezone: 'America/Los_Angeles' },
    // { title: 'Berlin', timezone: 'Europe/Berlin' }
    // ]
  }

  componentDidMount () {
    // const timezones = localStorage.getItem('worldClockTimezones') || []
    // this.setState({ timezones })
  }

  addTimezone (timezones) {
    this.setState({ timezones })
  }

  render () {
    return (
      <div className='app'>
        <ZoneChooser
          timezones={this.state.timezones}
          zones={this.zones}
          addTimezone={this.addTimezone}
        />
        <Clocks zones={this.zones} />
      </div>
    )
  }
}

export default App
