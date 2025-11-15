import { createSlice } from "@reduxjs/toolkit";

const gasSlice = createSlice({
  name: "gas",
  initialState: {
    verbrauch: 0,
    price: 0.26,
    total: 0,
  },
  reducers: {
    setVerbrauch: (state, action) => {
      state.verbrauch = action.payload;
      state.total = state.verbrauch * state.price;
    },
  },
});
export const { setVerbrauch } = gasSlice.actions;
export default gasSlice.reducer;