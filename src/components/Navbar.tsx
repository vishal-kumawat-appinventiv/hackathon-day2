import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.user.data.username);
  return (
    <div className="bg-slate-950">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl">Math Quiz App</h1>
        </div>
        <div>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
