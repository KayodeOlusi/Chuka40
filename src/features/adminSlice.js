import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  showAdminModal: false
};


export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAsAdmin: (state, action) => {
      state.user = action.payload
    },
    logoutAsAdmin: (state) => {
        state.user = null
    },
    holdAdminModal: (state, action) => {
      state.showAdminModal = action.payload.showAdminModal
    }
  },
});

export const { loginAsAdmin, logoutAsAdmin, holdAdminModal } = adminSlice.actions;
export const selectAdmin = (state) => state.admin.user;
export const selectAdminModal = (state) => state.admin.showAdminModal;
export default adminSlice.reducer;
