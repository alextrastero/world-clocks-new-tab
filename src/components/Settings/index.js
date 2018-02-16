import React from 'react'
import PropTypes from 'prop-types'
// import Clock from '../Clocks/Clock'
import './Settings.css'
import stationClockDefaults from './stationClockDefaults'
import { config } from './config'

class Settings extends React.Component {
  constructor (props) {
    super(props)

    const { timezone = {} } = props
    const defaultValues = {
      body: stationClockDefaults['RoundBody'],
      dial: stationClockDefaults['GermanStrokeDial'],
      hourHand: stationClockDefaults['PointedHourHand'],
      minuteHand: stationClockDefaults['PointedMinuteHand'],
      secondHand: stationClockDefaults['NoSecondHand'],
      boss: stationClockDefaults['NoBoss'],
      minuteHandBehavoir: stationClockDefaults['BouncingMinuteHand'],
      secondHandBehavoir: stationClockDefaults['BouncingSecondHand'],
      width: 200,
      height: 200
    }

    timezone.settings = timezone.settings || defaultValues

    this.state = timezone.settings
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
    const { updateSettings, timezone } = this.props

    updateSettings(Object.assign({}, timezone, { settings: this.state }))
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
    const { timezone } = this.props

    return timezone && (
      <div className='settings'>
        <div className='settings__preview'>{`Editing: ${timezone.title}`}</div>
        <div className='settings__form'>
          <form onSubmit={this.onSave}>
            {Object.keys(config).map(this.renderSelect)}
            <input className='settings__submit' type='submit' value='Save and Close' />
          </form>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  timezone: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string
  }).isRequired
}

export default Settings
