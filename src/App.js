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
        title: 'Berlin',
        GMT: 'CET'
      },
      {
        title: 'San Francisco',
        GMT: 'GMT-8'
      }
    ]
  }

  render() {
    return (
      <div className="container">
        {this.zones.map((zone) => <Clock zone={zone} />)}
      </div>
    )
  }
}

export default App
