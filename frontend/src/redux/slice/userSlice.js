import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    loginUser: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
