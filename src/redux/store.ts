import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './features/reservationSlice';
import foodReducer from './features/foodSlice';


export const store =  configureStore({
  reducer: {
    reservationsFromStore: reservationReducer,
    foodFromStore: foodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;