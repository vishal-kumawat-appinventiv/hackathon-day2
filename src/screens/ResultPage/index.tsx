import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Rss } from "lucide-react";
import { clearResult } from "@/redux/slices/resultSlice";

const ResultPage = () => {
  const resultData = useSelector((state: RootState) => state.result.data);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(clearResult());
    navigate("/quiz");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mt-32">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex flex-wrap items-center justify-between">
              Results : Math Quiz App 🎉
              <div className="flex items-center gap-2">
                <Button onClick={handlePlayAgain}>
                  Play Again <RotateCcw />
                </Button>
                <Button>
                  Leaderboard <Rss />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resultData[0]?.points !== undefined ? (
              <div>
                <h2 className="text-2xl mb-2 font-bold">
                  Points : {resultData[0]?.points} / 5
                </h2>
                <div>
                  <div className="hidden md:grid grid-cols-4 gap-2 font-semibold border-b py-2 bg-green-900 text-white">
                    <p>Question</p>
                    <p>Correct Answer</p>
                    <p>User Answer</p>
                    <p>Result</p>
                  </div>

                  {resultData[0]?.updatedQuizOutput.map((rs, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-4 gap-2 border-b py-2 p-2"
                    >
                      <p className="font-semibold md:font-normal">
                        {rs.question}
                      </p>
                      <p className="text-green-700 md:text-black">
                        {rs.correctAnswer}
                      </p>
                      <p>{rs.userAnswer}</p>
                      <p
                        className={`${
                          rs.correctAnswer === rs.userAnswer
                            ? "text-green-500"
                            : rs.userAnswer === null
                            ? "text-gray-500"
                            : "text-red-500"
                        }`}
                      >
                        {rs.correctAnswer === rs.userAnswer
                          ? "Correct"
                          : rs.userAnswer === null
                          ? "Not Attempted"
                          : "Wrong"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p>Play Again to get Results</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultPage;
