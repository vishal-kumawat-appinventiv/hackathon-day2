import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import questionsReducer from "./slices/questionSlice";
import resultReducer from "./slices/resultSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionsReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
