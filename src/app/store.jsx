import { configureStore } from "@reduxjs/toolkit";
import btoReducer from "../globalStorage/blogToolsOptions";
import ptoReducer from "../globalStorage/projectToolsOptions";

export const store = configureStore({
  reducer: {
    bto: btoReducer,
    pto: ptoReducer,
  },
});
