import { createSlice } from "@reduxjs/toolkit";

export const tabbarSlice = createSlice({
  name: "tabbar",
  initialState: {
    show: true,
  },
  reducers: {
    handleHide: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.show = false;
    },
    handleShow: (state) => {
      state.show = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleHide, handleShow } = tabbarSlice.actions;

export default tabbarSlice.reducer;
