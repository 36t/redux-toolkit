import React from 'react'
import './App.css'

import { Counter } from 'features/counter/Counter'
import TaskList from 'features/task/TaskList'
import TaskInput from 'features/task/TaskInput'
import Fetch from 'features/fetch/Fetch'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux toolkit</h1>
        <Counter />
        <TaskList />
        <TaskInput />
        <Fetch />
      </header>
    </div>
  )
}

export default App
