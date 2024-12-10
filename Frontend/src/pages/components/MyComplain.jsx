import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const MyComplain = () => {
  const [allComplain, setAllComplain] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  const getComplain = async () => {
    try {
      console.log("Fetching complaints...");
      const link = "http://localhost:3000/api/auth/my-complain";
      console.log(`Requesting data from: ${link}`);
      
      // Explicitly set credentials for cross-origin requests if needed
      const { data } = await axios.get(link, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Include cookies if your backend requires them
      });

      console.log("Data fetched:", data);
      setAllComplain(data.data);
      setError(null); // Clear error if data fetch is successful
      setLoading(false); // Stop the loading state
    } catch (err) {
      console.error("Error fetching complaints:", err);
      setError("Failed to load complaints. Please try again.");
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    getComplain();
    console.log(allComplain);
    
  },);

  return (<>
    <Header/>
    <div className="h-[100vh] w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-teal-700 to-blue-800 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Complaints</h1>

      {loading ? (
        <p className="text-lg font-semibold mt-12 text-gray-200">
          Loading complaints...
        </p>
      ) : error ? (
        <p className="text-lg font-semibold mt-12 text-red-400">{error}</p>
      ) : allComplain && allComplain.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {allComplain?.map((complain) => (
            <div
              key={complain._id}
              className="bg-white text-gray-900 rounded-lg shadow-lg p-6 space-y-4 border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold">Lab: {complain.labnum}</h2>
              <h3 className="text-lg text-blue-700 font-medium">
                Computer: {complain.computernum}
              </h3>
              <p className="text-gray-600">Issue: {complain.copmplaindes}</p>
              {/* <p className="text-sm text-gray-500 italic">
                Complained by: {complain.studentId?.email || "Unknown"}
              </p> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg font-semibold mt-12 text-gray-200">
          No complaints available
        </p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default MyComplain;
