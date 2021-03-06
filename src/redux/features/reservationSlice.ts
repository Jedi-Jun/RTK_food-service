import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 

export interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ['Jacob', 'Megan'],
}

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    /* removeReservation: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(ele => ele !== action.payload);
    } */
    }  
  }
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;