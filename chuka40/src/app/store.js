import { configureStore } from '@reduxjs/toolkit';
import guestReducer from '../features/guestSlice';
import adminReducer from '../features/adminSlice'

export const store = configureStore({
  reducer: {
    guest: guestReducer,
    admin: adminReducer
  },
});
