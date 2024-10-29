// src/redux/reducers/subTotal.reducers.js
import { createSlice } from "@reduxjs/toolkit";

export const subTotalSlice = createSlice({
  name: "subTotal",
  initialState: [],
  reducers: {
    setSubTotal: (state, action) => {
      const { index, subtotal } = action.payload;
      state[index] = subtotal; // Update the subtotal for the specific product at index
    },
    setInitialSubTotals: (state, action) => {
      return action.payload; // Set initial subtotals array when products are fetched
    },
  },
});

export const { setSubTotal, setInitialSubTotals } = subTotalSlice.actions;
export default subTotalSlice.reducer;
