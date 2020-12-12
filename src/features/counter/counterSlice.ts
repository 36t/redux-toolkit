import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'

interface CounterState {
  value: number;
}

// stateの初期値
const initialState: CounterState = {
  value: 0
}

// createSliceの関数
// ※stateとreducersが存在している
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Reducerを定義
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // actionのpayload: いわゆる引数
    // componentでの使用例：dispatch(incrementByAmount(Number(incrementAmount) || 0))
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// コンポーネントのdispatchで呼び出せるようにreducer関数をエクスポート
// 使用例：onClick={() => dispatch(increment())}
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 非同期処理のデモ
export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// ReactのコンポーネントからuseSelectで使えるようにするために、stateをexport
// 使用例：const count = useSelector(selectCount);
// ※state.counter.value <=  state.識別子.stateのプロパティ
export const selectCount = (state: RootState):number => state.counter.value

// app/storeで利用する
export default counterSlice.reducer
