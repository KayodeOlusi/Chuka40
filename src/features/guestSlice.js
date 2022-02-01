import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableNumber: null,
  modalState: false,
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
    },
    holdModalState: (state, action) => {
      state.modalState = action.payload.modalState
    }
  },
});

export const { holdTableNumber, holdFoodTray, holdModalState } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export const selectFoodTray = (state) => state.guest.foodTray;
export const selectModalState = (state) => state.guest.modalState;
export default guestSlice.reducer;
