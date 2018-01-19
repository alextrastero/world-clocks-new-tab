import React from 'react'
import Clocks from '../Clocks/'
import ZoneChooser from '../ZoneChooser/';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <ZoneChooser visible />
        <Clocks zones={this.zones} />
      </div>
    )
  }
}

export default App
