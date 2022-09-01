import { configureStore } from '@reduxjs/toolkit'
import exerciseReduser from "./slice/exerciseSlice"


export const store = configureStore({
  reducer: {
    exercise : exerciseReduser
  },
})

