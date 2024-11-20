import { MOCK_QUESTION } from "@/lib/mock";
import { QuestionType } from "@/lib/types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface questionState {
  data: QuestionType[];
}

// const existingUserFromLocalStorage = () => {
//   const existingUser = localStorage.getItem("user");
//   return existingUser ? JSON.parse(existingUser) : {};
// };

const initialState: questionState = {
  data: MOCK_QUESTION,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    // addUsername: (state, action: PayloadAction<string>) => {
    //   state.data.username = action.payload;
    // },
  },
});

export default questionSlice.reducer;

export const {} = questionSlice.actions;

export const getHardQuestions = createSelector(
  (state: { question: questionState }) => state.question.data,
  (questions) => questions.filter((question) => question.difficulty === "Hard")
);

export const getMediumQuestions = createSelector(
  (state: { question: questionState }) => state.question.data,
  (questions) =>
    questions.filter((question) => question.difficulty === "Medium")
);

export const getEasyQuestions = createSelector(
  (state: { question: questionState }) => state.question.data,
  (questions) => questions.filter((question) => question.difficulty === "Easy")
);
