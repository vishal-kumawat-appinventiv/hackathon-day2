import DifficultyPage from "@/screens/DifficultyPage";
import NotFound from "@/screens/NotFound";
import OnboardingPage from "@/screens/OnboardingPage";
import QuizPage from "@/screens/QuizPage";
import ResultPage from "@/screens/ResultPage";

export const ROUTES = [
  {
    path: "/",
    component: OnboardingPage,
    private: false,
  },
  {
    path: "/difficulty",
    component: DifficultyPage,
    private: false,
  },
  {
    path: "/quiz",
    component: QuizPage,
    private: true,
  },
  {
    path: "/result",
    component: ResultPage,
    private: true,
  },
  {
    path: "/*",
    component: NotFound,
    private: false,
  },
];
