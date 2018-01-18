import React from 'react'
import Clock from './Clock'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

  get zones() {
    return [
      {
        title: 'Berlin'
      }
    ]
  }

  render() {
    return (
      <div className="container">
        {this.zones.map((zone) => <Clock zone={zone.title} />)}
      </div>
    )
  }
}

export default App
