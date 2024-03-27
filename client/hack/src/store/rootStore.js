import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginStore";

const rootStore = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default rootStore;
