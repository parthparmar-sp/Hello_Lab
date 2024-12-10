import { LOGOUT_ROUTES } from "@/utils/constatns";
import axios from "axios";
import { FaLaptop } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Send request to server to delete cookies
      const response = await axios.post(LOGOUT_ROUTES, {}, { withCredentials: true });

      if (response.status === 200) {
        // Clear local storage and update login state
        localStorage.clear();
        setIsLoggedIn(false);
        toast.success("Logout successful");
        navigate("/auth");
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header className="h-16 bg-slate-800 text-white shadow-md">
      <div className="h-full container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <FaLaptop className="h-10 w-10 text-yellow-500" />
          </div>
          <div className="ml-3">
            <h1 className="text-2xl font-bold text-white">Lab Assistant</h1>
            <p className="text-sm text-gray-300 italic">Your companion for lab management</p>
          </div>
        </div>
        <ul className="flex space-x-8 text-base font-medium">
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <a href="/Labschedule">Lab Schedule</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <a href="/complain">Complain</a>
          </li>
          {!isLoggedIn ? (
            <>
              <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
                <a href="/auth">Login</a>
              </li>
              <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
                <a onClick={() => navigate("/register")}>
                 Register
                </a>
              </li>
            </>
          ) : (
            <li
              className="cursor-pointer hover:text-yellow-500 transition duration-200"
              onClick={handleLogout}
            >
              Logout
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
