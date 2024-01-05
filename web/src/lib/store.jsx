import { configureStore } from '@reduxjs/toolkit'

import printJobReducer from 'src/lib/printJobSlice'

export default configureStore({
  reducer: { printJob: printJobReducer },
})
