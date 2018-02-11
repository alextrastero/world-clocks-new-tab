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
    // const { options = this.initialOptions } = this.state

    this.clock = new StationClock(idx)
    this.clock.timezone = zone.timezone
    console.log(zone.settings)
    Object.assign(this.clock, zone.settings)

    this.clock.draw()
    var that = this
    this.interval = window.setInterval(function () {
      that.clock.draw()
    }, 5000)
  }

  render () {
    const { zone = {}, idx } = this.props

    return (
      <div className='clocks__clock'>
        <div className='clocks__clock-svg-wrapper'>
          <canvas id={idx} width='200' height='200' />
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
  onEdit: PropTypes.func.isRequired,
  idx: PropTypes.string
}

export default Clock
