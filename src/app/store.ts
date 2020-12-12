import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// スライサーからReducerをインポート
// export default counterSlice.reducer;
import counterReducer from 'features/counter/counterSlice'

// sliceを登録・結合している
// combine reducerが後ろで走っている
export const store = configureStore({
  reducer: {
    // この「counter」はsliceのnameに合わせる必要有
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
