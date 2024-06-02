import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const res = await axios.post("/auth/signup", credentials);
      console.log(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
