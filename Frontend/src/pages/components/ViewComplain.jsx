import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./ComplainAdmin/ComplainAdmin";
import Footer from "./footer/Footer";

const ViewComplain = () => {
  const [allComplain, setAllComplain] = useState(null);

  const getComplain = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/auth/complain");
      setAllComplain(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    getComplain();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-teal-700 to-blue-800 text-white">
        <div className="flex-grow flex flex-col items-center py-8 px-6">
          <h1 className="text-4xl font-bold mb-6">Complaints</h1>
          {allComplain && allComplain.length > 0 ? (
            <div className="w-full max-w-6xl flex flex-wrap gap-6 justify-center">
              {allComplain.map((complain) => (
                <div
                  key={complain._id}
                  className="bg-white text-gray-900 rounded-lg shadow-lg p-6 space-y-4 border border-gray-300 w-full md:w-[30%] hover:shadow-2xl transition-shadow duration-300"
                >
                  <h2 className="text-xl font-semibold">Lab: {complain.labnum}</h2>
                  <h3 className="text-lg text-blue-700 font-medium">
                    Computer: {complain.computernum}
                  </h3>
                  <p className="text-gray-600">Issue: {complain.copmplaindes}</p>
                  <p className="text-sm text-gray-500 italic">
                    Complained by: {complain.studentId?.email || "Unknown"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg font-semibold text-gray-200 mt-6">
              No complaints available
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ViewComplain;
