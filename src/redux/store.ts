import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import questionsReducer from "./slices/questionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
