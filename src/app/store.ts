import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from 'features/counter/counterSlice'
import taskReducer from 'features/task/taskSlice'
import fetchReducer from 'features/fetch/fetchSlice'

// sliceを登録・結合している
// combine reducerが後ろで走っている
export const store = configureStore({
  reducer: {
    // この「counter」はsliceの'name'に合わせる必要有
    counter: counterReducer,
    task: taskReducer,
    fetch: fetchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
