import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './redux/authenticationSlice'

export default configureStore({
  reducer:
  {
    authentication: authenticationReducer
  }
})

