import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
  },
  reducers: {
 
    toggle_true_and_false_on_login:(state,action)=>
        {
           state.value=action.payload
        },
 
  },
})

// Action creators are generated for each case reducer function
export const { toggle_true_and_false_on_login } = counterSlice.actions

export default counterSlice.reducer