import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guestEmail: "",
  tableNumber: null,
  modalState: false,
  foodTray: [],
  successful: false
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
    },
    holdGuestEmail: (state, action) => {
      state.guestEmail = action.payload.guestEmail
    },
    holdSuccess: (state, action) => {
      state.successful = action.payload.successful
    }
  },
});

export const { holdTableNumber, holdFoodTray, holdModalState, holdGuestEmail } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export const selectFoodTray = (state) => state.guest.foodTray;
export const selectModalState = (state) => state.guest.modalState;
export const selectGuestEmail = (state) => state.guest.guestEmail;
export const selectSuccess = (state) => state.guest.successful;
export default guestSlice.reducer;
