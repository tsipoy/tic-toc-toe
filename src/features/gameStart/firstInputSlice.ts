import { createSlice } from '@reduxjs/toolkit';

export const firstInputSlice = createSlice({
  name: 'user',
  initialState: {
    firstInput: null,
  },
  reducers: {
    setFirstInput: (state, action) => {
      state.firstInput = action.payload;
    }
  },
});


export const { setFirstInput } = firstInputSlice.actions;

export const selectFirstInput = (state: any) => state.firstInput.firstInput;

export default firstInputSlice.reducer;


