import { useNavigate } from "react-router-dom";

function Herosection() {
  const navigate = useNavigate();

  const onGetStarted = () => {
    navigate('/register');
  };

  // Retrieve the email and extract the username
  const fullEmail = localStorage.getItem('name') || 'User';
  const username = fullEmail.split('@')[0]; // Get text before the '@'

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hello <span className="text-orange-500">{username}</span>, I am your personal computer lab assistant
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-300">
          Manage your lab tasks effortlessly. Log in, check the lab schedule, or file a complaint.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transform transition-all duration-300 hover:scale-105"
        >
          Register
        </button>
      </div>
    </section>
  );
}

export default Herosection;
  