import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'

/*
* src/features/task/taskSlice.tsを複製・調整した
*/

export type TaskType = {
  id: number
  title: string
  completed: boolean
}

// CounterState => TaskSate + 内容
interface TaskState {
  idCount: number
  tasks: TaskType[]
}

// 変更箇所①
const initialState: TaskState = {
  idCount: 3, // id を連番でつけるために利用
  tasks: [{
    id: 1,
    title: 'task a',
    completed: false
  }, {
    id: 2,
    title: 'task b',
    completed: true
  }, {
    id: 3,
    title: 'task c',
    completed: false
  }]
}

// counterSlice => taskSlice
export const taskSlice = createSlice({
  // counter => task
  name: 'task',
  initialState,
  // 変更箇所②
  reducers: {
    // taskの追加
    newTask: (state, action: PayloadAction<string>) => {
      state.idCount++

      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false
      } as TaskType

      state.tasks = [newItem, ...state.tasks]
    },

    // taskの終了
    completeTask: (state, action: PayloadAction<TaskType>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)

      if (task) {
        task.completed = !task.completed
      }
    },

    // taskの削除
    deleteTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    }
  }
})

// reducerの調整
export const { newTask, completeTask, deleteTask } = taskSlice.actions

// 変更箇所③
export const selectTasks = (state: RootState):TaskType[] => state.task.tasks

// app/storeで利用
export default taskSlice.reducer
