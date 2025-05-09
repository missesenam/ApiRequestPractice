import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersDate: [],
  isLoading: true,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
