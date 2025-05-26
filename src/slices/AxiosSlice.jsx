import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveData = createAsyncThunk("users/retrieveData", async () => {
  // delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   fetch data
  const todo = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(todo.data);
  return todo.data;
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const axiosSlice = createSlice({
  name: "theusers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(retrieveData.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(retrieveData.rejected, (state) => {
        state.error = "error fetching data";
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = axiosSlice.actions;

export default axiosSlice.reducer;
