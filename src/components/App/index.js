import React from 'react'
import Clocks from '../Clocks/'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

  get zones() {
    return [
      {
        title: 'Berlin',
        timezone: 'Europe/Berlin'
      }
    ]
  }

  render() {
    return (
      <div className="app">
        <Clocks zones={this.zones} />
      </div>
    )
  }
}

export default App
