import { configureStore } from "@reduxjs/toolkit";
import axiosReducer from "../slices/AxiosSlice";
import randomuserReducer from "../slices/RandomUserSlice";

export const store = configureStore({
  reducer: {
    theusers: axiosReducer,
    randomusers: randomuserReducer,
  },
});
