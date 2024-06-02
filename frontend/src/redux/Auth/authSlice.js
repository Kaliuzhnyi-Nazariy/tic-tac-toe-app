import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./auth";

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
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        state.user.nickname = action.payload.nickname;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { nickname: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
