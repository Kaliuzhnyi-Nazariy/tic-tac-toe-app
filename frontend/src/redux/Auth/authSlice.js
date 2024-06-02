import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./auth";

const initialState = {
  user: { nickname: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
