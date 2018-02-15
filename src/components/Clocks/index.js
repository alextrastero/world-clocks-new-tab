import React from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock.js'
import './Clocks.css'

const Clocks = ({ timezones, onEdit }) => {
  const renderTimezones = () => {
    // TODO fix this, you can get an array of 1
    if (!timezones.length) {
      return <Clock onEdit={() => onEdit('clock')} idx='clock' />
    }

    return timezones.map((zone, idx) =>
      <Clock
        onEdit={() => onEdit(idx)}
        zone={zone}
        key={`clock${idx}`}
        idx={`clock${idx}`}
      />
    )
  }

  return <div className='clocks'>{renderTimezones()}</div>
}

Clocks.propTypes = {
  timezones: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Clocks
