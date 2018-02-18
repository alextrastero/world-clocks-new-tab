import React from 'react'
import PropTypes from 'prop-types'
import Clock from '../Clocks/Clock'
import './Settings.css'
import stationClockDefaults from './stationClockDefaults'
import { config } from './config'

class Settings extends React.Component {
  constructor (props) {
    super(props)

    const { zone = {} } = props
    const defaultValues = {
      body: stationClockDefaults['RoundBody'],
      dial: stationClockDefaults['GermanStrokeDial'],
      hourHand: stationClockDefaults['PointedHourHand'],
      minuteHand: stationClockDefaults['PointedMinuteHand'],
      secondHand: stationClockDefaults['NoSecondHand'],
      boss: stationClockDefaults['NoBoss'],
      minuteHandBehavoir: stationClockDefaults['BouncingMinuteHand'],
      secondHandBehavoir: stationClockDefaults['BouncingSecondHand']
    }

    zone.settings = zone.settings || defaultValues

    this.state = {
      settings: zone.settings,
      title: zone.title
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.renderOption = this.renderOption.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.randomSettings = this.randomSettings.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  handleChange (evt) {
    const { name, value } = evt.target

    this.setState({
      settings: Object.assign({}, this.state.settings, { [name]: parseInt(value) })
    })
  }

  onSave (evt) {
    evt.preventDefault()
    const { updateSettings, zone } = this.props
    const { title, settings } = this.state

    updateSettings(Object.assign({}, zone, { settings, title }))
  }

  renderOption ({ value, text }, idx) {
    return <option value={value} key={`option-${idx}`}>{text}</option>
  }

  renderSelect (key, idx) {
    return (
      <div className='row' key={`select-${idx}`}>
        <label className='four columns' forhtml={key}>{key}</label>
        <select
          className='eight columns'
          name={key}
          onChange={this.handleChange}
          defaultValue={this.state.settings[key]}
        >
          {config[key].map(this.renderOption)}
        </select>
      </div>
    )
  }

  updateTitle (evt) {
    this.setState({ title: evt.target.value })
  }

  randomSettings () {
    const settings = {}
    let idx
    Object.keys(config).forEach((val) => {
      idx = Math.floor(Math.random(1) * config[val].length)
      settings[val] = config[val][idx].value
    })

    this.setState({ settings })
  }

  render () {
    const { zone } = this.props

    return zone && (
      <div className='settings row'>
        <div className='settings__form six columns'>
          <form onSubmit={this.onSave}>
            {Object.keys(config).map(this.renderSelect)}
            <div className='row'>
              <input className='six columns' onClick={this.randomSettings} type='button' value='Random' />
              <input className='button-primary six columns' type='submit' value='Save' />
            </div>
          </form>
        </div>
        <div className='settings__preview six columns'>
          <div className='settings__clock'>
            <Clock preview idx='preview' zone={{ timezone: zone.timezone, settings: this.state.settings }} />
          </div>
          <label forhtml='title'>Title</label>
          <input type='text' name='title' onChange={this.updateTitle} defaultValue={zone.title} />
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  zone: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string
  }).isRequired
}

export default Settings
