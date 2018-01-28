import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isValid from './form-validator'

import './ZoneChooser.css'

class ZoneChooser extends React.Component {
  constructor () {
    super()

    this.state = {
      active: true
    }

    this.toggleVisible = this.toggleVisible.bind(this)
    this.addTimezone = this.addTimezone.bind(this)
    this.removeTimezone = this.removeTimezone.bind(this)
    this.renderZoneListElem = this.renderZoneListElem.bind(this)
  }

  toggleVisible () {
    this.setState({ active: !this.state.active })
  }

  renderZoneListElem (zone, idx) {
    return (
      <li key={idx}>{zone.title}: {zone.timezone}
        <button onClick={() => this.removeTimezone(idx)}>&#10006;</button>
      </li>
    )
  }

  removeTimezone (idx) {
    const updated = Array.from([...this.props.timezones])
    updated.splice(idx, 1)
    this.props.updateTimezones(updated)
  }

  addTimezone (evt) {
    evt.preventDefault()
    const { timezones, updateTimezones } = this.props
    const form = evt.target
    const title = form.title.value
    const timezone = form.timezone.value

    if (!isValid({ title, timezone }, timezones)) {
      this.setState({ error: 'Can\'t be empty or wrong timezone or already exists' })
      return
    }

    updateTimezones(timezones.concat({ title, timezone }))

    // TODO move to willReceiveProps
    this.setState({ error: '' })
  }

  renderForm () {
    return (
      <div>
        <form onSubmit={this.addTimezone}>
          <label htmlFor='title'>title<input name='title' defaultValue='Berlin' /></label>
          <label htmlFor='timezone'>timezone<input name='timezone' defaultValue='Europe/Berlin' /></label>
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }

  render () {
    const { error, active } = this.state
    const { timezones } = this.props

    return (
      <div className={cx('zone-chooser', { 'is-active': active })}>
        <div className='zone-chooser__opener'>
          <button onClick={this.toggleVisible}>Open</button>
        </div>
        <div className='zone-chooser__chooser'>
          <div>
            {this.renderForm()}
            <small>{error}</small>
          </div>
          <ul>
            {timezones.map(this.renderZoneListElem)}
          </ul>
          <button onClick={this.toggleVisible}>Save</button>
        </div>
      </div>
    )
  }
}

ZoneChooser.propTypes = {
  timezones: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string
  })),
  updateTimezones: PropTypes.func
}

export default ZoneChooser
