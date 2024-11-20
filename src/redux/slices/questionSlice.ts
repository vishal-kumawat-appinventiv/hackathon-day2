import { MOCK_QUESTION } from "@/lib/mock";
import { QuestionType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
