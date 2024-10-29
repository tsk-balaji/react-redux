import { createSlice } from "@reduxjs/toolkit";

export const subTotalSlice = createSlice({
  name: "subTotal",
  initialState: { subtotal: [] },
  reducers: {
    subtotalAmount: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { subtotalAmount } = subTotalSlice.actions;
export default subTotalSlice.reducer;
