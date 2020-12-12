import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux toolkit</h1>
        <Counter />
      </header>
    </div>
  )
}

export default App
