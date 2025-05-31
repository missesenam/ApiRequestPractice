import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const retriveRandom = createAsyncThunk(
  "randomuser/retriveRandom",
  async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const response = await axios.get("https://randomuser.me/api");
    console.log(response.data);
    const apiuserArray = response.data.results;
    return apiuserArray;
  }
);

const initialState = {
  randomUsers: [],
  isLoading: false,
  error: null,
};

export const randomuserSlice = createSlice({
  name: "randomusers",
  initialState,
  reducers: {
    resetBeforeFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.randomUsers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retriveRandom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(retriveRandom.fulfilled, (state, action) => {
        state.randomUsers = action.payload;
        state.isLoading = false;
      })
      .addCase(retriveRandom.rejected, (state) => {
        state.error = "error fetching data";
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetBeforeFetch } = randomuserSlice.actions;

export default randomuserSlice.reducer;
