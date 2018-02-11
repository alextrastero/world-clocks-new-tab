import React from 'react'
import PropTypes from 'prop-types'
// import Clock from '../Clocks/Clock'
import './Settings.css'
import { config } from './config'

class Settings extends React.Component {
  constructor (props) {
    super(props)

    const defaultValues = {
      body: 'RoundBody',
      dial: 'GermanStrokeDial',
      hourHand: 'PointedHourHand',
      minuteHand: 'PointedMinuteHand',
      secondHand: 'NoSecondHand',
      boss: 'NoBoss',
      minuteHandBehavoir: 'BouncingMinuteHand',
      secondHandBehavoir: 'BouncingSecondHand'
    }

    console.log('props', props.timezone.settings.body)
    const { timezone = { settings: defaultValues } } = props
    console.log('value', timezone.settings.body)

    this.state = timezone.settings
    this.handleChange = this.handleChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  handleChange (evt) {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSave (evt) {
    evt.preventDefault()
    const { updateSettings, timezone } = this.props

    updateSettings(Object.assign({}, timezone, { settings: this.state }))
  }

  render () {
    const { timezone } = this.props

    return timezone && (
      <div className='settings'>
        <div className='settings__preview'>
          {`Editing: ${timezone.title}`}
        </div>
        <div className='settings__form'>
          <form onSubmit={this.onSave}>
            {Object.keys(config).map((key, idx) => (
              <div>
                <p>{key}</p>
                <select name={key} id={key} onChange={this.handleChange}>
                  {config[key].map((val) => (
                    <option selected={val.value === this.state[key]} value={val.value}>
                      {val.text}
                    </option>
                  ))}
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
