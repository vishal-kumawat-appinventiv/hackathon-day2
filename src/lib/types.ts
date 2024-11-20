export type DifficultyLevels = "Easy" | "Medium" | "Hard";

export interface userType {
  username: string;
  difficulty: DifficultyLevels;
}
export interface QuestionType {
  question: string;
  answer: number;
  options: number[];
  difficulty: DifficultyLevels;
}
