// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user password from local storage
    const studentPassword = localStorage.getItem("studentPassword");
    if (studentPassword) {
      setCurrentPassword(studentPassword); // Optional: pre-fill current password (not recommended for security)
    }
    setIsLoading(false);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate new password and confirm password
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      // Send request to update the password
      const response = await axios.post("/api/changePassword", {
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        toast.success("Password changed successfully");
        // Optionally, update local storage
        localStorage.setItem("studentPassword", newPassword);
        // Clear the form fields
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to change password. Please try again.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Change Password</h2>
      <form onSubmit={handleUpdate} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default Profile;