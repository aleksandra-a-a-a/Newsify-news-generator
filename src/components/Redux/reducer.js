import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: 'tile',
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = appSlice.actions;

export default appSlice.reducer;
