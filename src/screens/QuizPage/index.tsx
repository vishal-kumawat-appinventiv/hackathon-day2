import { QuestionType } from "@/lib/types";
import {
  getEasyQuestions,
  getHardQuestions,
  getMediumQuestions,
} from "@/redux/slices/questionSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const { difficulty } = useSelector((state: RootState) => state.user.data);

  let questionsToBeAsked: QuestionType[] = [];

  if (difficulty === "Easy") questionsToBeAsked = useSelector(getEasyQuestions);
  if (difficulty === "Medium")
    questionsToBeAsked = useSelector(getMediumQuestions);
  if (difficulty === "Hard") questionsToBeAsked = useSelector(getHardQuestions);

  return <div>QuizPage</div>;
};

export default QuizPage;
