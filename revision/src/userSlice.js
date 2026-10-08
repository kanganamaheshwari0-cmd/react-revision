import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "Kangana",
  },

  reducers: {
    changeUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;