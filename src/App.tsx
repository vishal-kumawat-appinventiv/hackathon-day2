import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { ROUTES } from "./lib/constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import PrivateRoute from "./routes/privateRoute";

const App = () => {
  const user = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="dark:bg-black min-h-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.private ? (
                  <PrivateRoute>{<route.component />}</PrivateRoute>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
