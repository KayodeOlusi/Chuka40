import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
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
    }
  },
});

export const { loginAsAdmin, logoutAsAdmin } = adminSlice.actions;
export const selectAdmin = (state) => state.admin.user;
export default adminSlice.reducer;
