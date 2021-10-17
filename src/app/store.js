import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//THE GLOBAL REDUX STORE
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
