import { createSlice } from '@reduxjs/toolkit'

export const printJobSlice = createSlice({
  name: 'printJob',
  initialState: {
    chars: {},
    text: '',
  },
  reducers: {
    setChars: (state, action) => {
      state.chars = JSON.parse(action.payload)
    },
    setText: (state, action) => {
      state.text = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setChars, setText } = printJobSlice.actions

export default printJobSlice.reducer
