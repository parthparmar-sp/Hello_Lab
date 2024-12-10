import { useNavigate } from "react-router-dom";

function AdminWelcome() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Admin Greeting */}
        <h2 className="text-2xl font-bold mb-4 text-orange-500">
          Welcome Admin
        </h2>
        <p className="text-base text-gray-300 mb-4">
          You are now in control. Manage tasks, schedules, and more with ease.
        </p>
        
        {/* Lab-Related Circle */}
        <div className="mt-6">
          <div className="w-28 h-28 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg flex justify-center items-center">
            {/* Lab Flask Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M15 3v2h-6V3h6zm1 16h-8v-1h8v1zm-1-2H9v-4h6v4zm2-6h-2V6h2v5zM9 6v5H7V6h2z" />
            </svg>
          </div>
        </div>
        
        {/* Placeholder Text */}
        <div className="mt-4 text-base text-gray-400">
          <p>Ready to start managing the lab? Select an option from the menu above.</p>
        </div>
      </div>
    </section>
  );
}

export default AdminWelcome;
