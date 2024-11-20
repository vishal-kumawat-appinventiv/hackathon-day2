import DifficultyPage from "@/screens/DifficultyPage";
import NotFound from "@/screens/NotFound";
import OnboardingPage from "@/screens/OnboardingPage";
import QuizPage from "@/screens/QuizPage";
import ResultPage from "@/screens/ResultPage";

export const ROUTES = [
  {
    path: "/",
    component: OnboardingPage,
  },
  {
    path: "/difficulty",
    component: DifficultyPage,
  },
  {
    path: "/quiz",
    component: QuizPage,
  },
  {
    path: "/result",
    component: ResultPage,
  },
  {
    path: "/*",
    component: NotFound,
  },
];
