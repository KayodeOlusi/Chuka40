import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guestEmail: "",
  previous: false,
  tableNumber: null,
  modalState: false,
  foodTray: [],
  successful: false,  
  changeProgress: false,
  changeSuccess: false ,
  guestInit: "",
  guestNum: null
};


export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    holdTableNumber: (state, action) => {
      state.tableNumber = action.payload.tableNumber
    },
    holdPrevious: (state, action) => {
      state.previous = action.payload.previous
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
    },
    holdChangeProgress: (state, action) => {
      state.changeProgress = action.payload.changeProgress
    },
    holdChangeCompleted: (state, action) => {
      state.changeCompleted = action.payload.changeCompleted
    },
    holdGuestInit: (state, action) => {
      state.guestInit = action.payload.guestInit
    },
    holdGuestNum: (state, action) => {
      state.guestNum = action.payload.guestNum
    }
  },
});

export const {  holdGuestNum, holdPrevious ,holdGuestInit, holdChangeProgress, holdChangeCompleted, holdTableNumber, holdFoodTray, holdModalState, holdGuestEmail } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export const selectGuestNum = (state) => state.guest.guestNum;
export const selectGuestInit = (state) => state.guest.guestInit;
export const selectFoodTray = (state) => state.guest.foodTray;
export const selectModalState = (state) => state.guest.modalState;
export const selectGuestEmail = (state) => state.guest.guestEmail;
export const selectSuccess = (state) => state.guest.successful;
export const selectChangeProgress = (state) => state.guest.changeProgress;
export const selectChangeCompleted = (state) => state.guest.changeCompleted;
export const selectPrevious = (state) => state.guest.previous;
export default guestSlice.reducer;
