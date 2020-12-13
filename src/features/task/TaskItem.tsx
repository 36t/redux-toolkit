import React from 'react'

import { useDispatch } from 'react-redux'

// SliceからReducer関数を読み込み
import { completeTask, deleteTask, TaskType } from './taskSlice'

type Props = {
  task: TaskType
}

const TaskItem: React.FC<Props> = (props:Props) => {
  const { task } = props
  const dispatch = useDispatch()

  return (
    <div>
      <input type="checkbox" onClick={() => dispatch(completeTask(task))} defaultChecked={task.completed} />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>削除</button>
    </div>
  )
}

export default TaskItem
