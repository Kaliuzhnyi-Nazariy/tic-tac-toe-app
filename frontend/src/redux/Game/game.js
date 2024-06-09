import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changeIsSearching = createAsyncThunk(
  "game/changeIsSearching",
  async (credential, thunkApi) => {
    try {
      // const res =
      await axios.patch("/game/isSearching", {
        isSearchingGame: credential,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const findOpponent = createAsyncThunk("game/findOpponent", async () => {
  const res = await axios.get("/game/findOpponent");
  console.log("res: ", res);
  return res.data;
});
