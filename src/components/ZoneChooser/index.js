import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isValid from './form-validator'

import './ZoneChooser.css'

class ZoneChooser extends React.Component {
  constructor () {
    super()

    this.state = {
      active: false
    }

    this.toggleVisible = this.toggleVisible.bind(this)
    this.addTimezone = this.addTimezone.bind(this)
    this.removeTimezone = this.removeTimezone.bind(this)
    this.renderZoneListElem = this.renderZoneListElem.bind(this)
  }

  toggleVisible (evt) {
    evt.preventDefault()
    this.setState({ active: !this.state.active })
  }

  renderZoneListElem (zone, idx) {
    return (
      <li key={idx}>{zone.title}: {zone.timezone}
        <button onClick={() => this.removeTimezone(idx)}>x</button>
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
      this.setState({ error: 'Can\'t be empty or wrong timezone or already exists\nhttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones' })
      return
    }

    updateTimezones(timezones.concat({ title, timezone }))

    // TODO move to willReceiveProps
    this.setState({ error: '' })
  }

  renderForm () {
    return (
      <div className='zone-chooser__form'>
        <form onSubmit={this.addTimezone}>
          <label htmlFor='title'>Title: <input name='title' /></label>
          <label htmlFor='timezone'>Timezone: <input name='timezone' /></label>
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }

  render () {
    const { error, active } = this.state
    const { timezones = [] } = this.props

    return (
      <div className={cx('zone-chooser', { 'is-active': active })}>
        <div className='zone-chooser__opener'>
          <a href='#' onClick={this.toggleVisible}>Config</a>
        </div>
        <div className='zone-chooser__chooser'>
          <p>Check out the <a href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones' target='_blank'>list of timezones</a>.</p>
          <div>
            {this.renderForm()}
            <small>{error}</small>
          </div>
          <ul>
            {timezones.map(this.renderZoneListElem)}
          </ul>
          <button className='zone-chooser__save' onClick={this.toggleVisible}>Save</button>
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
