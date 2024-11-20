import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { ROUTES } from "./lib/constant";

const App = () => {
  return (
    <div className="dark:bg-black min-h-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
