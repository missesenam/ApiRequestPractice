import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserSlice";
import axiosReducer from "../slices/AxiosSlice";

export const store = configureStore({
  reducer: {
    theusers: axiosReducer,
    users: userReducer,
  },
});
