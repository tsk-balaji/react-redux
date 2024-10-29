import { createSlice } from "@reduxjs/toolkit";

export const jsonDataSlice = createSlice({
  name: "jsonData",
  initialState: { isLoading: false, products: [] },
  reducers: {
    jsonData: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { jsonData } = jsonDataSlice.actions;
export default jsonDataSlice.reducer;
