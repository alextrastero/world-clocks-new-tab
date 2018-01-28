import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Clock from './Clock.js'
import './Clocks.css'

const Clocks = ({ timezones }) => {
  const className = cx(
    'clocks',
    {
      'clocks--two': timezones.length === 2,
      'clocks--XL': timezones.length > 2
    }
  )

  const renderTimezones = () => {
    // TODO fix this, you can get an array of 1
    if (!timezones.length) {
      return <Clock idx='clock' />
    }

    return timezones.map((zone, idx) =>
      <Clock zone={zone} key={`clock${idx}`} idx={`clock${idx}`} />
    )
  }

  return (
    <div className={className}>
      {renderTimezones()}
    </div>
  )
}

Clocks.propTypes = {
  timezones: PropTypes.array.isRequired
}

export default Clocks
