import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { userLogin: false },
  reducers: {
    login: (state) => {
      state.userLogin = true;
    },
    logout: (state) => {
      state.userLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
