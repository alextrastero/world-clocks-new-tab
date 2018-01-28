import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isValid from './form-validator'

import './ZoneChooser.css'

class ZoneChooser extends React.Component {
  constructor () {
    super()

    this.state = {
      active: false,
      timezones: []
    }

    this.toggleVisible = this.toggleVisible.bind(this)
    this.addTimezone = this.addTimezone.bind(this)
  }

  toggleVisible () {
    this.setState({ active: !this.state.active })
  }

  renderZoneListElem (zone, idx) {
    return <li key={idx}>{zone.title}: {zone.timezone} <button>✖︎</button></li>
  }

  addTimezone (evt) {
    evt.preventDefault()
    const { timezones, addTimezone } = this.props
    const form = evt.target
    const title = form.title.value
    const timezone = form.timezone.value

    if (!isValid({ title, timezone }, timezones)) {
      this.setState({ error: 'Can\'t be empty or wrong timezone or already exists' })
      return
    }

    addTimezone(timezones.concat({ title, timezone }))

    // TODO move to willReceiveProps
    this.setState({ error: '' })
  }

  renderForm () {
    return (
      <div>
        <form onSubmit={this.addTimezone}>
          <label htmlFor='title'>title
            <input name='title' defaultValue='pepe' />
          </label>
          <label htmlFor='timezone'>timezone
            <input name='timezone' defaultValue='Europe/Berlin' />
          </label>
          <input type='submit' value='add' />
        </form>
      </div>
    )
  }

  render () {
    const { zones } = this.props
    const { timezones, error, active } = this.state

    return (
      <div className={cx('zone-chooser', { 'is-active': active })}>
        <div className='zone-chooser__opener'>
          <button onClick={this.toggleVisible}>Open</button>
        </div>
        <div>
          {this.renderForm()}
          <small>{error}</small>
        </div>
        <div className='zone-chooser__chooser'>
          {zones.length && zones.map(this.renderZoneListElem)}
          <button onClick={this.toggleVisible}>Add</button>
          <button onClick={this.toggleVisible}>Save</button>
        </div>
      </div>
    )
  }
}

ZoneChooser.propTypes = {
  zones: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string
  }))
}

export default ZoneChooser
