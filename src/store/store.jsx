import { configureStore } from '@reduxjs/toolkit'
import onlineUsersSlice from '../features/OnlineUsers/onlineUsersSlice'

export const store = configureStore({
  reducer: {
    onlineUsers: onlineUsersSlice
  },
})