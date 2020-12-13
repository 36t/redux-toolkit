import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

// SliceからReducer関数を読み込み
import { newTask } from './taskSlice'

const TaskInput: React.FC = () => {
  const dispatch = useDispatch()

  const [editTitle, setEditTitle] = useState('')

  const handlerTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(newTask(editTitle))
    setEditTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={editTitle} onChange={handlerTitleChange} placeholder="Please type in" />
      <button>NEW</button>
    </form>
  )
}

export default TaskInput
