import { LeaderboardType } from "@/lib/types";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface leaderBoardState {
  data: LeaderboardType[];
}

const existingLeaderBoardData = () => {
  const LeaderBoard = localStorage.getItem("leaderBoard");
  return LeaderBoard ? JSON.parse(LeaderBoard) : [];
};

const initialState: leaderBoardState = {
  data: existingLeaderBoardData(),
};

const leaderBoard = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLeaderboardData: (state, action: PayloadAction<LeaderboardType>) => {
      state.data.push(action.payload);
    },
  },
});

export default leaderBoard.reducer;

export const { addLeaderboardData } = leaderBoard.actions;

const difficultyMultiplier = {
  Easy: 2,
  Medium: 4,
  Hard: 6,
};

export const getLeaderBoardData = createSelector(
  (state: RootState) => state.leaderboard.data,
  (data: LeaderboardType[]) => {
    return data
      .map((entry) => ({
        ...entry,
        calculatedScore: entry.points * difficultyMultiplier[entry.difficulty],
      }))
      .sort((a, b) => b.calculatedScore - a.calculatedScore);
  }
);
