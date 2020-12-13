import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

import { fetchUsers, UserType } from 'service/userService'

interface FetchState {
  users: UserType[];
}

// stateの初期値
const initialState: FetchState = {
  users: new Array<UserType>()
}

// 非同期関数は関数の外に書くのがルール
export const loadUsers = createAsyncThunk('fetch/get', async () => {
  const response = await fetchUsers()
  return response.data as UserType[]
})

export const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  // 通信の後処理 (createAsyncThunkを使った場合こちらを利用)
  extraReducers: (builder) => {
    // 後処理の処理 (成功)
    builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
      return {
        ...state,
        users: action.payload // response.data
      }
    })
  }
})

// コンポーネントから参照
export const selectUsers = (state: RootState): UserType[] => state.fetch.users

export default fetchSlice.reducer
