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

export interface ResultType {
  question: string;
  correctAnswer: number;
  userAnswer: number | null;
}
