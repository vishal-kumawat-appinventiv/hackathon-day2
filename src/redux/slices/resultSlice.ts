import { ResultType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultPayload {
  updatedQuizOutput: ResultType[];
  points: number;
}

interface ResultState {
  data: ResultPayload[];
}

const initialState: ResultState = {
  data: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<ResultPayload>) => {
      state.data.push(action.payload);
    },
    clearResult: (state) => {
      state.data = [];
    },
  },
});

export default resultSlice.reducer;

export const { addResult, clearResult } = resultSlice.actions;
