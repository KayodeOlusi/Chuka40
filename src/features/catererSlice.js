import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catererDetails: null
};


export const catererSlice = createSlice({
  name: 'caterer',
  initialState,
  reducers: {
    holdCatererDetails: (state, action) => {
        state.catererDetails = action.payload
    }
  },
});

export const { holdCatererDetails } = catererSlice.actions;
export const selectCaterer = (state) => state.caterer.catererDetails; 
export default catererSlice.reducer;
