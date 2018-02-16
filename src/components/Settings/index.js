import React from 'react'
import PropTypes from 'prop-types'
// import Clock from '../Clocks/Clock'
import './Settings.css'
import stationClockDefaults from './stationClockDefaults'
import { config } from './config'

class Settings extends React.Component {
  constructor (props) {
    super(props)

    const { timezone } = props
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

    timezone.settings = timezone.settings || defaultValues

    this.state = timezone.settings
    this.handleChange = this.handleChange.bind(this)
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

  render () {
    const { timezone } = this.props
    let value

    return timezone && (
      <div className='settings'>
        <div className='settings__preview'>{`Editing: ${timezone.title}`}</div>
        <div className='settings__form'>
          <form onSubmit={this.onSave}>
            {Object.keys(config).map((key, idx) => (
              <div key={`div-${idx}`}>
                <p>{key}</p>
                <select name={key} id={key} onChange={this.handleChange}>
                  {config[key].map((val, idy) => {
                    value = stationClockDefaults[val.value]
                    return (
                      <option value={value} key={`option-${idy}`} selected={value === this.state[key]}>
                        {val.text}
                      </option>
                    )
                  })}
                </select>
              </div>
            ))}
            <input className='settings__submit' type='submit' value='Save and Close' />
          </form>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  timezone: PropTypes.any
}

export default Settings
