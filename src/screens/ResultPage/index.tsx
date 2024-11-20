import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const resultData = useSelector((state: RootState) => state.result.data);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mt-36">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex items-center justify-between">
              Result : Math Quiz App 🎉
              <Button>Leaderboard</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resultData[0]?.points ? (
              <>
                <h2 className="text-2xl mb-2">
                  Points : {resultData[0]?.points}
                </h2>
              </>
            ) : (
              <>
                <p>Play Again to get Results</p>
                <Button onClick={() => navigate("/quiz")} className="mt-2">
                  Play Again
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
