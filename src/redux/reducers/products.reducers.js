// src/redux/reducers/products.reducers.js
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [] },
  reducers: {
    jsonSetProductsData: (state, action) => {
      return { ...state, products: action.payload.products }; // Set the products with the fetched data
    },
  },
});

// Action creator export
export const { jsonSetProductsData } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;
