import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isUser = useSelector((state: RootState) => state.user.data.username);

  const route =
    window.location.pathname === "/quiz" ||
    window.location.pathname === "/result";

  return !isUser && route ? <Navigate to="/" /> : <>{children}</>;
};

export default PrivateRoute;
