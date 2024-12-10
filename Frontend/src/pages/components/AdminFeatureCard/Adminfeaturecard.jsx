import { useNavigate } from "react-router-dom";

function Featurecard() {
  const navigate = useNavigate();

  const handleAdminScheduleClick = () => {
    navigate("/AdminLabShedule"); // Redirect to the Admin Schedule page
  };

  const handleViewComplainClick = () => {
    navigate("/view-complain"); // Redirect to the View Complain page
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Explore the features and tools available for managing your tasks efficiently.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Admin Schedule Card */}
          <div
            onClick={handleAdminScheduleClick}
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 px-8 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold">AdminLabSchedule</h3>
            <p className="mt-2">
              View and manage the lab schedule easily.
            </p>
          </div>

          {/* View Complain Card */}
          <div
            onClick={handleViewComplainClick}
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 px-8 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold">View Complaints</h3>
            <p className="mt-2">
              View and manage student complaints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featurecard;
