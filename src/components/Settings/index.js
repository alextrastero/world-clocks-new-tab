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

    this.state = zone.settings
    this.handleChange = this.handleChange.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  handleChange (evt) {
    const { name, value } = evt.target
    this.setState({ [name]: parseInt(value) })
  }

  onSave (evt) {
    evt.preventDefault()
    const { updateSettings, zone } = this.props

    updateSettings(Object.assign({}, zone, { settings: this.state }))
  }

  renderOption (val, idx) {
    return <option value={stationClockDefaults[val.value]} key={`option-${idx}`}>{val.text}</option>
  }

  renderSelect (key, idx) {
    return (
      <div key={`div-${idx}`}>
        <p>{key}</p>
        <select name={key} id={key} onChange={this.handleChange} defaultValue={this.state[key]}>
          {config[key].map(this.renderOption)}
        </select>
      </div>
    )
  }

  render () {
    const { zone } = this.props

    return zone && (
      <div className='settings'>
        <div className='settings__form'>
          <form onSubmit={this.onSave}>
            {Object.keys(config).map(this.renderSelect)}
            <input className='settings__submit' type='submit' value='Save and Close' />
          </form>
        </div>
        <div className='settings__preview'>
          <p>{`Editing: ${zone.title}`}</p>
          <div className='settings__clock'>
            <Clock
              preview
              idx='preview'
              zone={{ timezone: zone.timezone, settings: this.state }} />
          </div>
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
