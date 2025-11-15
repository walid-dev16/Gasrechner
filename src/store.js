import { configureStore } from "@reduxjs/toolkit";
import gasSlice from "./slice/gasSlice";

const store = configureStore({
  reducer: {
    gas: gasSlice,
  },
});

export default store;
