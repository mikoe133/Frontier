// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'

// 你可以后续添加 reducer
export const store = configureStore({
  reducer: {

  },
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch