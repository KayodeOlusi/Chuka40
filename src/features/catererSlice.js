import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catererDetails: null,
    orderId: null,
    showOrderModal: false,
    editModal: false,
    editId: null
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
    },
    holdShowEdit: (state, action) => {
      state.editModal = action.payload.editModal
    },
    holdEditId: (state, action) => {
      state.editId = action.payload.editId
    },
    logOut: (state) => {
      state.catererDetails = null
    }
  }
});

export const { logOut, holdCatererDetails, holdOrderId, holdShowModal, holdShowEdit, holdEditId } = catererSlice.actions;
export const selectCaterer = (state) => state.caterer.catererDetails;
export const selectOrderId = (state) => state.caterer.orderId;
export const selectCatererModal = (state) => state.caterer.showOrderModal;
export const selectEditModal = (state) => state.caterer.editModal;
export const selectEditId = (state) => state.caterer.editId;
export default catererSlice.reducer;
