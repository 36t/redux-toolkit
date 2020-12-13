import React from 'react'

// Redux toolkit
import { useSelector } from 'react-redux'
import { selectTasks, TaskType } from './taskSlice'

// コンポーネント
import TaskItem from './TaskItem'

const TaskList: React.FC = () => {
  // storeのデータを参照
  const tasks:TaskType[] = useSelector(selectTasks)

  return (
    <div>{tasks.map((task) => {
      return <TaskItem key={task.id} task={task} />
    })}</div>
  )
}

export default TaskList
