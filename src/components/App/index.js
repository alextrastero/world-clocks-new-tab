import React from 'react'
import localStorage from 'localStorage'

import Clocks from '../Clocks/'
import ZoneChooser from '../ZoneChooser/'

import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.localStorageItemKey = 'worldClockTimezones'
    this.state = {
      timezones: []
    }

    this.updateTimezones = this.updateTimezones.bind(this)
  }

  componentWillMount () {
    let timezones = []

    try {
      timezones = JSON.parse(localStorage.getItem(this.localStorageItemKey))
    } catch (err) {
      console.error('Wrong Clock format', err)
    }

    if (timezones !== null) {
      this.setState({ timezones })
    }
  }

  updateTimezones (timezones) {
    localStorage.setItem(this.localStorageItemKey, JSON.stringify(timezones))
    this.setState({ timezones })
  }

  render () {
    const { timezones } = this.state

    return (
      <div className='app'>
        <ZoneChooser timezones={timezones} updateTimezones={this.updateTimezones} />
        <Clocks timezones={timezones} />
      </div>
    )
  }
}

export default App
