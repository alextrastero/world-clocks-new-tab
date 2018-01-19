import React from 'react'
import Clocks from '../Clocks/'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <Clocks />
      </div>
    )
  }
}

export default App
