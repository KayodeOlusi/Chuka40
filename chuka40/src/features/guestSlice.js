import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableNumber: null
};


export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    holdTableNumber: (state, action) => {
      state.tableNumber = action.payload.tableNumber
    }
  },
});

export const { holdTableNumber } = guestSlice.actions;
export const selectTableNumber = (state) => state.guest.tableNumber;
export default guestSlice.reducer;
