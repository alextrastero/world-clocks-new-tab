import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Clock from './Clock.js'
import './Clocks.css'

const Clocks = ({ zones }) => {
  const className = cx(
    'clocks',
    {
      'clocks--two': zones.length === 2,
      'clocks--XL': zones.length > 2
    }
  )

  return (
    <div className={className}>
      { zones.map((zone, idx) => <Clock zone={zone} key={`clock${idx}`} idx={`clock${idx}`} />) }
    </div>
  )
}

Clocks.propTypes = {
  zones: PropTypes.array.isRequired
}

export default Clocks
