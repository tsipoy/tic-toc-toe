import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    value: "",
  },
  reducers: {
    setBoard: (state, action) => {
      state.value = action.payload;
    }
  },
});


export const { setBoard } = boardSlice.actions;

export const selectBoard = (state: any) => state.value.value;

export default boardSlice.reducer;