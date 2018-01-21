import React from 'react'
import cx from 'classnames'

import './ZoneChooser.css'

class ZoneChooser extends React.Component {
  constructor () {
    super()

    this.state = {
      active: false
    }

    this.toggleVisible = this.toggleVisible.bind(this)
  }

  toggleVisible () {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <div className={cx('zone-chooser', { 'is-active': this.state.active })}>
        <div className='zone-chooser__opener'>
          <button onClick={this.toggleVisible}>Open</button>
        </div>
        <div className='zone-chooser__chooser'>
          Add timezones
          <button onClick={this.toggleVisible}>Save</button>
        </div>
      </div>
    )
  }
}
export default ZoneChooser
