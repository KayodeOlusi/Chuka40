import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catererDetails: null,
    orderId: null,
    showOrderModal: false
};


export const catererSlice = createSlice({
  name: 'caterer',
  initialState,
  reducers: {
    holdCatererDetails: (state, action) => {
        state.catererDetails = action.payload
    },
    holdOrderId: (state, action) => {
        state.orderId = action.payload.orderId
    },
    holdShowModal: (state, action) => {
      state.showOrderModal = action.payload.showOrderModal
    }
  }
});

export const { holdCatererDetails, holdOrderId, holdShowModal } = catererSlice.actions;
export const selectCaterer = (state) => state.caterer.catererDetails;
export const selectOrderId = (state) => state.caterer.orderId;
export const selectCatererModal = (state) => state.caterer.showOrderModal;
export default catererSlice.reducer;
