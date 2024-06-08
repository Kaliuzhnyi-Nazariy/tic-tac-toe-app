import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, signup } from "./auth";

const initialState = {
  user: { nickname: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
        state.user.nickname = action.payload.nickname;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { nickname: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          nickname: action.payload.nickname,
          email: action.payload.email,
        };
        state.token = action.payload.token;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
