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

const OnboardingPage = () => {
  const [username, setUsername] = useState("");

  const handleOnboarding = () => {
    console.log("username", username);
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-10 md:mt-48">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Onbording : Math Quiz App
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
        <CardFooter>
          <Button onClick={handleOnboarding}>
            Proceed <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnboardingPage;
