import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Rss } from "lucide-react";
import { useSelector } from "react-redux";
import { getLeaderBoardData } from "@/redux/slices/leaderboardSlice";

const LeaderBoardPage = () => {
  const LeaderBoardData = useSelector(getLeaderBoardData);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mt-32">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex flex-wrap items-center">
              LeaderBoard : Math Quiz App{" "}
              <Rss className="text-green-700 ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {LeaderBoardData.length > 0 ? (
              <>
                <div>
                  <div className="hidden md:grid grid-cols-4 gap-2 font-semibold border-b py-2 bg-green-900 text-white p-2">
                    <p>Username</p>
                    <p>points</p>
                    <p>difficulty</p>
                  </div>

                  {LeaderBoardData?.map((ld, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-4 gap-2 border-b py-2 p-2"
                    >
                      <p className="font-semibold md:font-normal">
                        {ld.username}
                      </p>
                      <p>{ld.points}</p>
                      <p>{ld.difficulty}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p>No Previous Game Data</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
