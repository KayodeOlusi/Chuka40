import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catererDetails: null,
    orderId: null
};


export const catererSlice = createSlice({
  name: 'caterer',
  initialState,
  reducers: {
    holdCatererDetails: (state, action) => {
        state.catererDetails = action.payload
    },
    holdOrderId: (state, action) => {
        state.orderId = action.payload
    }
  }
});

export const { holdCatererDetails, holdOrderId } = catererSlice.actions;
export const selectCaterer = (state) => state.caterer.catererDetails;
export const selectOrderId = (state) => state.caterer.orderId;
export default catererSlice.reducer;
