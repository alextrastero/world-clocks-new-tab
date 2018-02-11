import React from 'react'
import localStorage from 'localStorage'

import Clocks from '../Clocks/'
import ZoneChooser from '../ZoneChooser/'
import Settings from '../Settings/'

import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.localStorageItemKey = 'worldClockTimezones'
    this.state = {
      timezones: [],
      editingId: null
    }

    this.updateTimezones = this.updateTimezones.bind(this)
    this.updateSettings = this.updateSettings.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentWillMount () {
    if (this.state.timezones.length) return

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

  handleEdit (idx) {
    this.setState({ editingId: idx })
  }

  updateSettings (timezone) {
    const { timezones, editingId } = this.state
    timezones[editingId] = timezone

    localStorage.setItem(this.localStorageItemKey, JSON.stringify(timezones))
    this.setState({ editingId: null, timezones })
  }

  render () {
    const { timezones, editingId } = this.state

    return (
      <div className='app'>
        {editingId !== null && <Settings timezone={timezones[editingId]} updateSettings={this.updateSettings} />}
        <ZoneChooser timezones={timezones} updateTimezones={this.updateTimezones} />
        <Clocks onEdit={this.handleEdit} timezones={timezones} />
      </div>
    )
  }
}

export default App
