import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 

export interface FoodState {
  main: string;
  side: string;
}

const initialState: any = {
  value: {}
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<FoodState>) => {
      const { main, side } = action.payload;
      if(!state.value[main]) {
        console.log(111);
        state.value[main] = [side]
      } else {
        console.log(333);
        state.value[main].push(side)
      };
    },
    // removefood: (state, action: PayloadAction<number>) => {
    //   state.value.splice(action.payload, 1);
    // }  
  }
});

export const { addFood, /* removefood */ } = foodSlice.actions;

export default foodSlice.reducer;