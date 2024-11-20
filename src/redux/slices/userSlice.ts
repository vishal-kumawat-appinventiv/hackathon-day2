import { DifficultyLevels, userType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  data: userType;
}

const existingUserFromLocalStorage = () => {
  const existingUser = localStorage.getItem("user");
  return existingUser ? JSON.parse(existingUser) : {};
};

const initialState: userState = {
  data: existingUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
      state.data.username = action.payload;
    },
    addDifficulty: (state, action: PayloadAction<DifficultyLevels>) => {
      state.data.difficulty = action.payload;
    },
    clearUser: (state) => {
      localStorage.removeItem("user");
      //@ts-ignore
      state.data = {};
    },
  },
});

export default userSlice.reducer;

export const { addUsername, addDifficulty, clearUser } = userSlice.actions;
