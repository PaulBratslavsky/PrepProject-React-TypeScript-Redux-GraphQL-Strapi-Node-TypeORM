import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => ({ ...state, ...action.payload }),
    logoutUser: () => initialState,
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
