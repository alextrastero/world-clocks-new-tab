import React from 'react'
import cx from 'classnames'

import Clock from './Clock.js'
import './Clocks.css'

const Clocks = ({ zones }) => {
  const className = cx(
    'clocks',
    {
      'clocks--two': zones.length == 2,
      'clocks--XL': zones.length > 2
    }
  )

  return (
    <div className={className}>
      { zones.map((zone, idx) => <Clock zone={zone} key={`clock${idx}`} />) }
    </div>
  )
}

export default Clocks
