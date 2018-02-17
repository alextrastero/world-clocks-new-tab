import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isValid from './form-validator'

import './ZoneChooser.css'

class ZoneChooser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false,
      error: {}
    }

    this.toggleVisible = this.toggleVisible.bind(this)
    this.addTimezone = this.addTimezone.bind(this)
    this.removeTimezone = this.removeTimezone.bind(this)
    this.renderZoneListElem = this.renderZoneListElem.bind(this)
  }

  toggleVisible (evt) {
    evt.preventDefault()
    this.clearInputs()
    this.setState({ active: !this.state.active })
  }

  clearInputs () {
    this._title.value = ''
    this._timezone.value = ''
  }

  renderZoneListElem (zone, idx) {
    return (
      <li key={idx}>{zone.title}: <span>{zone.timezone}</span>
        <button className='u-pull-right' onClick={() => this.removeTimezone(idx)}>x</button>
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

    const { valid, error } = isValid({ title, timezone }, timezones)
    if (!valid) {
      this.setState({ error })
      return
    }

    updateTimezones(timezones.concat({ title, timezone }))

    // TODO move to willReceiveProps
    this.setState({ error: {} })
  }

  renderForm () {
    return (
      <div className='zone-chooser__form'>
        <form onSubmit={this.addTimezone}>
          <div className='row'>
            <label className='columns four' htmlFor='title'>Title: </label>
            <input className='columns eight' type='text' ref={el => (this._title = el)} name='title' />
          </div>
          <div className='row'>
            <label className='columns four' htmlFor='timezone'>Timezone: </label>
            <input className='columns eight' type='text' ref={el => (this._timezone = el)} name='timezone' />
          </div>
          <input type='submit' className='u-full-width' value='Add' />
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
            <small>{error.message}</small>
          </div>
          <ul>
            {timezones.map(this.renderZoneListElem)}
          </ul>
          <button className='zone-chooser__save button-primary' onClick={this.toggleVisible}>Save</button>
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
