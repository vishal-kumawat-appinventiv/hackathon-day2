import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  getEasyQuestions,
  getMediumQuestions,
  getHardQuestions,
} from "@/redux/slices/questionSlice";
import { QuestionType, ResultType } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { difficulty } = useSelector((state: RootState) => state.user.data);

  let questions: QuestionType[] = [];
  if (difficulty === "Easy") questions = useSelector(getEasyQuestions);
  else if (difficulty === "Medium") questions = useSelector(getMediumQuestions);
  else questions = useSelector(getHardQuestions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [points, setPoints] = useState(0);
  const [quizOutput, setQuizOutput] = useState<ResultType[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setPoints(points + 1);
      toast({
        title: "Correct!",
        description: "Great job! You got it right.",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer was ${currentQuestion.answer}.`,
        variant: "destructive",
      });
    }

    const updatedQuizOutput = [
      ...quizOutput,
      {
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        userAnswer: selectedAnswer,
      },
    ];

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setQuizOutput(updatedQuizOutput);
    } else {
      setQuizOutput(updatedQuizOutput);
      console.log("Quiz finished", updatedQuizOutput);
      navigate("/result");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-xl mx-auto mt-10 md:mt-36">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex items-center justify-between">
              <div>
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <div className="text-right">
                <p>
                  Points: {points}/{questions.length}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{currentQuestion.question}</p>
            <RadioGroup
              onValueChange={(value) => setSelectedAnswer(Number(value))}
              value={selectedAnswer?.toString() || ""}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem
                    value={option.toString()}
                    id={`option-${index}`}
                  />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;
