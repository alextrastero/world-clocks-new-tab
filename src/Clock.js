import React from 'react'
import PropTypes from 'prop-types'

import clockSVG from './assets/clock.svg'

const Clock = ({ zone }) => {
  return (
    <div className='clock'>
      <div className='clock__svg-wrapper'>
        <object data={clockSVG} type="image/svg+xml" width="200" height="200">
          <param name="dial"               value="austria"/>
          <param name="hourHand"           value="swiss"/>
          <param name="minuteHand"         value="swiss"/>
          <param name="secondHand"         value="none"/>
          <param name="minuteHandBehavior" value="stepping"/>
          <param name="secondHandBehavior" value="swinging"/>
          <param name="secondHandStopToGo" value="yes"/>
          <param name="secondHandStopTime" value="1.5"/>
          <param name="backgroundColor"    value="rgba(0,0,0,0)"/>
          <param name="dialColor"          value="rgb(40,40,40)"/>
          <param name="hourHandColor"      value="rgb(20,20,20)"/>
          <param name="minuteHandColor"    value="rgb(20,20,20)"/>
          <param name="secondHandColor"    value="rgb(160,50,40)"/>
          <param name="axisCoverColor"     value="rgb(40,40,40)"/>
          <param name="axisCoverRadius"    value="0"/>
          <param name="updateInterval"     value="50"/>
        </object>
      </div>
      { zone && <p className='clock__svg-wrapper'>{zone}</p> }
    </div>
  )
}

Clock.propTypes = {
  zone: PropTypes.string
}

export default Clock
