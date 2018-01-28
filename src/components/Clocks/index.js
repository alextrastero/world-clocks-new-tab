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

  const renderZones = () => {
    if (!zones.length) {
      return <Clock idx='clock' />
    }

    return zones.map((zone, idx) =>
      <Clock zone={zone} key={`clock${idx}`} idx={`clock${idx}`} />
    )
  }

  return (
    <div className={className}>
      {renderZones()}
    </div>
  )
}

Clocks.propTypes = {
  zones: PropTypes.array.isRequired
}

export default Clocks
