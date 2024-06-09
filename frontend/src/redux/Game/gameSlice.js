import { createSlice } from "@reduxjs/toolkit";
import { changeIsSearching, findOpponent } from "./game";

const initialState = {
  isSearching: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(changeIsSearching.fulfilled, (state, action) => {
        state.isSearching = action.meta.arg;
      })
      .addCase(findOpponent.fulfilled, (state, action) => {
        console.log("state: ", state);
        console.log("action: ", action);
      });
  },
});

export const gameReducer = gameSlice.reducer;
