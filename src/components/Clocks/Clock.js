import React from 'react'
import PropTypes from 'prop-types'
import StationClock from './station-clock'

class Clock extends React.Component {
  constructor (props) {
    super(props)

    this.initialOptions = {
      body: StationClock.RoundBody,
      dial: StationClock.GermanStrokeDial,
      hourHand: StationClock.PointedHourHand,
      minuteHand: StationClock.PointedMinuteHand,
      secondHand: StationClock.NoSecondHand,
      boss: StationClock.NoBoss,
      minuteHandBehavoir: StationClock.BouncingMinuteHand,
      secondHandBehavoir: StationClock.BouncingSecondHand
    }

    this.initializeClock = this.initializeClock.bind(this)
    this.isNewClock = this.isNewClock.bind(this)
  }

  componentWillUnmount () {
    this.clock = undefined
    window.clearInterval(this.interval)
  }

  shouldComponentUpdate (newProps) {
    return this.isNewClock(newProps)
  }

  componentWillReceiveProps (newProps) {
    if (this.isNewClock(newProps)) {
      this.initializeClock(newProps)
    }
  }

  componentDidMount () {
    this.initializeClock(this.props)
  }

  isNewClock (newProps) {
    return JSON.stringify(newProps.zone) !== JSON.stringify(this.props.zone)
  }

  initializeClock (props) {
    // clear previous clock
    this.clock = undefined
    window.clearInterval(this.interval)

    const { zone = {}, idx } = props
    const clockSettings = zone.settings || this.initialOptions

    this.clock = new StationClock(idx)
    this.clock.timezone = zone.timezone
    Object.assign(this.clock, clockSettings)

    this.clock.draw()
    var that = this
    this.interval = window.setInterval(function () {
      that.clock.draw()
    }, 50)
  }

  render () {
    const { onEdit, zone = {}, idx } = this.props

    return (
      <div className='clocks__clock'>
        {this.props.zone && <a onClick={onEdit} className='clocks__clock-settings' />}
        <div className='clocks__clock-svg-wrapper'>
          <canvas id={idx} width={200} height={200} />
          {zone.title && <p className='clocks__clock-timezone'>{zone.title}</p>}
        </div>
      </div>
    )
  }
}

Clock.propTypes = {
  zone: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    settings: PropTypes.any
  }),
  onEdit: PropTypes.func,
  idx: PropTypes.string
}

export default Clock
