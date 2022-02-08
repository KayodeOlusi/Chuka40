import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guestEmail: "",
  tableNumber: null,
  modalState: false,
  foodTray: [],
  successful: false,
  inProgress: false,
  completed: false,  
  changeProgress: false,
  changeSuccess: false 
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
    },
    holdInProgress: (state, action) => {
      state.inProgress = action.payload.inProgress
    },
    holdCompleted: (state, action) => {
      state.completed = action.payload.completed
    },
    holdChangeProgress: (state, action) => {
      state.changeProgress = action.payload.changeProgress
    },
    holdChangeCompleted: (state, action) => {
      state.changeCompleted = action.payload.changeCompleted
    }
  },
});

export const { holdChangeProgress, holdChangeCompleted, holdTableNumber, holdFoodTray, holdModalState, holdGuestEmail, holdInProgress, holdCompleted } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export const selectFoodTray = (state) => state.guest.foodTray;
export const selectModalState = (state) => state.guest.modalState;
export const selectGuestEmail = (state) => state.guest.guestEmail;
export const selectSuccess = (state) => state.guest.successful;
export const selectInProgress = (state) => state.guest.inProgress;
export const selectCompleted = (state) => state.guest.completed;
export const selectChangeProgress = (state) => state.guest.changeProgress;
export const selectChangeCompleted = (state) => state.guest.changeCompleted;
export default guestSlice.reducer;
