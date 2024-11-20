import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addUsername } from "@/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OnboardingPage = () => {
  const [username, setUsername] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleOnboarding = () => {
    if (username === "") {
      toast({
        title: "Please enter a username",
        description: "Username cannot be empty",
        variant: "destructive",
      });
      return;
    }
    dispatch(addUsername(username));
    toast({
      title: "Welcome, " + username,
      description: "You are now logged in",
    });
    navigate("/difficulty");
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-10 md:mt-48">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Onboarding : Math Quiz App 😎
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="username">Enter your username</Label>
          <Input
            placeholder="Enter here.."
            className="mt-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-start">
          <Button onClick={handleOnboarding} className="w-[150px]">
            Proceed <ArrowRight />
          </Button>
          <div className="mt-2">
            <p>Made with 💛 by Vishal Kumawat</p>
            <p>@Appinventiv Hackathon Day 2</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnboardingPage;
