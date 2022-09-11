import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer'
import scheduleReducer from './schedule-reducer'

const store = configureStore({   reducer: {
    app: appReducer,
    schedule: scheduleReducer,
  }, })

export default store