import { LOGOUT_ROUTES_ADMIN } from '@/utils/constatns';
import axios from 'axios';
import { FaLaptop } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


function Header() {
  const navigate = useNavigate();

  const redirectToAdminPage = () => {
    navigate('/admin'); // Change this to the path you want to redirect to
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(LOGOUT_ROUTES_ADMIN, {}, { withCredentials: true }); // Correct usage
  
      if (response.status === 200) {
        localStorage.clear();
        toast.success("Logout successfullllllll");
        navigate('/auth');
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed. Please try again.");
    }
  };
  

  return (
    <header className="h-16 shadow-lg bg-gray-900 text-white">
      <div className="h-full container mx-auto flex items-center justify-between px-6">
   
        <div className="flex items-center">
          
          <FaLaptop
            className="h-12 w-12 text-orange-500 animate-spin-slow cursor-pointer"
            onClick={redirectToAdminPage}
          />
          <div className="ml-4">
            <h1 className="text-3xl font-bold tracking-wide">Lab Assistant</h1>
            <p className="text-sm text-gray-400 italic">What can I help with today?</p>
          </div>
        </div>


        <div className="flex items-center space-x-8">
     
        <button
            onClick={() => navigate("/AdminLabShedule")}
            className="text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:bg-orange-600 hover:scale-105"
          >
            AdminLabShedule
          </button>

          <button
            onClick={() => navigate("/View-Complain")}
            className="text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:bg-orange-600 hover:scale-105"
          >
            View Complain
          </button>
          <button
            onClick={handleLogout}
            className="text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:bg-orange-600 hover:scale-105"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
