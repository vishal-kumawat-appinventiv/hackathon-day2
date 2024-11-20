import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addDifficulty } from "@/redux/slices/userSlice";
import { DifficultyLevels } from "@/lib/types";

const DifficultyPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDifficultySelection = () => {
    if (!selectedDifficulty) {
      toast({
        title: "Please select a difficulty",
        description: "You must choose a difficulty level to proceed",
        variant: "destructive",
      });
      return;
    }
    dispatch(addDifficulty(selectedDifficulty as DifficultyLevels));
    toast({
      title: "Welcome to Math Quiz App",
      description: `You've selected ${selectedDifficulty} difficulty`,
    });
    navigate("/quiz");
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-10 md:mt-48">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Select Difficulty : Math Quiz App 🧮
          </CardTitle>
        </CardHeader>
        <CardContent>
          medium
          <Label htmlFor="difficulty">Choose your difficulty level</Label>
          <RadioGroup
            onValueChange={setSelectedDifficulty}
            className="mt-2 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Easy" id="easy" />
              <Label htmlFor="easy">Easy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Medium" id="medium" />
              <Label htmlFor="medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Hard" id="hard" />
              <Label htmlFor="hard">Hard</Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handleDifficultySelection} className="w-[150px]">
            Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DifficultyPage;
