import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Rss } from "lucide-react";

const ResultPage = () => {
  const resultData = useSelector((state: RootState) => state.result.data);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mt-36">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex flex-wrap items-center justify-between">
              Result : Math Quiz App 🎉
              <Button>
                Leaderboard <Rss />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resultData[0]?.points ? (
              <div>
                <h2 className="text-2xl mb-2">
                  Points : {resultData[0]?.points}
                </h2>
                <div className="flex justify-between items-center border-b py-2 bg-green-900 p-2">
                  <p>Question</p>
                  <p>Correct Answer</p>
                  <p>User Answer</p>
                  <p>Result</p>
                </div>
                {resultData[0]?.updatedQuizOutput.map((rs, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b py-2 p-2"
                  >
                    <p>{rs.question}</p>
                    <p>{rs.correctAnswer}</p>
                    <p>{rs.userAnswer}</p>
                    <p>
                      {rs.correctAnswer === rs.userAnswer ? "Correct" : "Wrong"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p>Play Again to get Results</p>
                <Button onClick={() => navigate("/quiz")} className="mt-2">
                  Play Again <RotateCcw />
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultPage;
