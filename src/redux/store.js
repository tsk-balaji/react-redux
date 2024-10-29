// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import jsonDataReducer from "./reducers/products.reducers";
import subTotalReducer from "./reducers/subTotal.reducers";

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
    subTotal: subTotalReducer,
  },
});

export default store;
