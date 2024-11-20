import { ResultType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface resultState {
  data: ResultType[];
}

const initialState: resultState = {
  data: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<ResultType[]>) => {
      state.data = action.payload;
    },
  },
});

export default resultSlice.reducer;

export const { addResult } = resultSlice.actions;
