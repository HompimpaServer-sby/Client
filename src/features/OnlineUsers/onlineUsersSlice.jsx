import { createSlice } from '@reduxjs/toolkit'

export const onlineUsersSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue } = onlineUsersSlice.actions

export default onlineUsersSlice.reducer