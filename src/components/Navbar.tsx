import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { clearUser } from "@/redux/slices/userSlice";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { toast } = useToast();
  const userName = useSelector((state: RootState) => state.user.data.username);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
    toast({
      title: "Logout successfully",
      description: "You have been logged out",
    });
  };

  return (
    <div className="bg-card">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl">Math Quiz App</h1>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <ChevronDown />
              {userName}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer hover:!bg-red-500"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
