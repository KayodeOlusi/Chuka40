import { configureStore } from '@reduxjs/toolkit';
import guestReducer from '../features/guestSlice';
import adminReducer from '../features/adminSlice';
import catererReducer from '../features/catererSlice';

export const store = configureStore({
  reducer: {
    guest: guestReducer,
    admin: adminReducer,
    caterer: catererReducer
  },
});
