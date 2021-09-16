import { createSlice } from '@reduxjs/toolkit';

export const secondInputSlice = createSlice({
    name: 'user',
    initialState: {
      secondInput: null,
    },
    reducers: {
      setSecondInput: (state, action) => {
        state.secondInput = action.payload;
      }
    },
  });
  
  export const { setSecondInput } = secondInputSlice.actions;
  
  export const selectSecondInput = (state: any) => state.secondInput.secondInput;
  
  export default secondInputSlice.reducer;
  