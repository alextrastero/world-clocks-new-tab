import React from 'react'

import setupClockDate from './setupClockDate.js'
import ClockSVG from './ClockSVG.js'

class Clock extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, {
      timezone: this.props.zone.timezone,
      dial: 'din 41091.1',
      hourHand: 'din 41092.3',
      minuteHand: 'din 41092.3',
      secondHand: 'none',
      minuteHandBehavior: 'stepping',
      secondHandBehavior: 'swinging',
      secondHandStopToGo: 'yes',
      secondHandStopTime: '1.5',
      backgroundColor: 'rgba(0,0,0,0)',
      dialColor: 'rgb(40,40,40)',
      hourHandColor: 'rgb(20,20,20)',
      minuteHandColor: 'rgb(20,20,20)',
      secondHandColor: 'rgb(160,50,40)',
      axisCoverColor: 'rgb(20,20,20)',
      axisCoverRadius: '0',
      updateInterval: '30000'
    }, this.props.options)

    setupClockDate(options, this.props.key)
  }

  render () {
    // timezones https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    const { key, zone } = this.props

    return (
      <div className='clocks__clock'>
        <div className='clocks__clock-svg-wrapper'>
          <ClockSVG key={key} />
          <p className='clocks__clock-timezone'>{zone.title}</p>
        </div>
      </div>
    )
  }
}

export default Clock
