import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableNumber: null,
  foodTray: []
};


export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    holdTableNumber: (state, action) => {
      state.tableNumber = action.payload.tableNumber
    },
    holdFoodTray: (state, action) => {
      state.foodTray = action.payload.foodTray
    }
  },
});

export const { holdTableNumber, holdFoodTray } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export const selectFoodTray = (state) => state.guest.foodTray;
export default guestSlice.reducer;
