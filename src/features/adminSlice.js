import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  showAdminModal: false,
  assignedMeals: null
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
    },
    holdAssignedMeals: (state, action) => {
      state.assignedMeals = action.payload.assignedMeals
    }
  },
});

export const { loginAsAdmin, logoutAsAdmin, holdAdminModal, holdAssignedMeals } = adminSlice.actions;
export const selectAdmin = (state) => state.admin.user;
export const selectAdminModal = (state) => state.admin.showAdminModal;
export const selectAssignedMeals = (state) => state.admin.assignedMeals;
export default adminSlice.reducer;
