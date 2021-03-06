import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import useReducer from '../features/gameStart/firstInputSlice';
import counterReducer from '../features/counter/counterSlice';
import secondReducer from '../features/gameStart/secondInputSlice';
import timingReducer from '../features/gameStart/timingSlice';
import boardReducer from "../features/boardGame/BoardSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    firstInput: useReducer,
    secondInput: secondReducer,
    timing: timingReducer,
    board: boardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;