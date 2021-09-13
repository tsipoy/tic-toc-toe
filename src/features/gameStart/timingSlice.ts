import { createSlice } from '@reduxjs/toolkit';

export const timingSlice = createSlice({
  name: 'user',
  initialState: {
    timing: null,
  },
  reducers: {
    setTiming: (state, action) => {
      state.timing = action.payload;
    }
  },
});


export const { setTiming } = timingSlice.actions;

export const selectTiming = (state: any) => state.timing.timing;

export default timingSlice.reducer;
