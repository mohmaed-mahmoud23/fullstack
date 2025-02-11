import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userslice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    setuserdetails: (state, action) => {
      state.user = action.payload;
      console.log("userdetails", action.payload);
    },
  },
});

export const { setuserdetails } = userslice.actions;

export default userslice.reducer;
