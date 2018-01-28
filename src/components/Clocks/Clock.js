import React from 'react'
import PropTypes from 'prop-types'
import StationClock from './station-clock'

class Clock extends React.Component {
  constructor () {
    super()

    this.initializeClock = this.initializeClock.bind(this)
  }

  componentWillUnmount () {
    this.clock = undefined
    window.clearInterval(this.interval)
  }

  componentDidMount () {
    this.initializeClock()
  }

  initializeClock () {
    const { zone = {}, idx } = this.props

    this.clock = new StationClock(idx)
    this.clock.timezone = zone.timezone
    this.clock.body = StationClock.RoundBody
    this.clock.dial = StationClock.GermanStrokeDial
    this.clock.hourHand = StationClock.PointedHourHand
    this.clock.minuteHand = StationClock.PointedMinuteHand
    this.clock.secondHand = StationClock.NoSecondHand
    this.clock.boss = StationClock.NoBoss
    this.clock.minuteHandBehavoir = StationClock.BouncingMinuteHand
    this.clock.secondHandBehavoir = StationClock.BouncingSecondHand

    this.clock.draw()
    var that = this
    this.interval = window.setInterval(function () {
      that.clock.draw()
    }, 20000)
  }

  render () {
    // timezones https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

    const { zone, idx } = this.props
    return (
      <div className='clocks__clock'>
        <div className='clocks__clock-svg-wrapper'>
          <canvas id={idx} width='200' height='200' />
          {zone && <p className='clocks__clock-timezone'>{zone.title}</p>}
        </div>
      </div>
    )
  }
}

Clock.propTypes = {
  options: PropTypes.shape({}),
  zone: PropTypes.shape({}),
  idx: PropTypes.string
}

export default Clock
