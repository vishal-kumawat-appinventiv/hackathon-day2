import { MOCK_QUESTION } from "@/lib/mock";
import { QuestionType } from "@/lib/types";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface questionState {
  data: QuestionType[];
}

const initialState: questionState = {
  data: MOCK_QUESTION,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default questionSlice.reducer;

export const {} = questionSlice.actions;

function getRandomQuestions(
  questions: QuestionType[],
  count: number
): QuestionType[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const getHardQuestions = createSelector(
  (state: RootState) => state.questions.data,
  (questions) => {
    const hardQuestions = questions.filter(
      (question) => question.difficulty === "Hard"
    );
    return getRandomQuestions(hardQuestions, 5);
  }
);

export const getMediumQuestions = createSelector(
  (state: RootState) => state.questions.data,
  (questions) => {
    const mediumQuestions = questions.filter(
      (question) => question.difficulty === "Medium"
    );
    return getRandomQuestions(mediumQuestions, 5);
  }
);

export const getEasyQuestions = createSelector(
  (state: RootState) => state.questions.data,
  (questions) => {
    const easyQuestions = questions.filter(
      (question) => question.difficulty === "Easy"
    );
    return getRandomQuestions(easyQuestions, 5);
  }
);
