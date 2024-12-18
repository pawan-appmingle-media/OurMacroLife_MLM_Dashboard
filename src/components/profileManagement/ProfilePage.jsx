import React, { useState } from "react";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 123 456 7890",
    registeredDate: "2023-10-15",
    totalEarnings: 1200,
    coinsEarned: 150,
    referralEarnings: 500,
    totalReferrals: 30,
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {/* Profile Overview */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {editMode ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-medium text-gray-600">Name:</p>
            <input
              type="text"
              value={editMode ? "John Doe" : userData.name}
              className={`${
                editMode ? "border" : "bg-gray-100"
              } w-full p-2 rounded-md`}
              readOnly={!editMode}
            />
          </div>
          <div>
            <p className="font-medium text-gray-600">Email:</p>
            <input
              type="email"
              value={editMode ? "john.doe@example.com" : userData.email}
              className={`${
                editMode ? "border" : "bg-gray-100"
              } w-full p-2 rounded-md`}
              readOnly={!editMode}
            />
          </div>
          <div>
            <p className="font-medium text-gray-600">Phone:</p>
            <input
              type="text"
              value={editMode ? "+91 123 456 7890" : userData.phone}
              className={`${
                editMode ? "border" : "bg-gray-100"
              } w-full p-2 rounded-md`}
              readOnly={!editMode}
            />
          </div>
          <div>
            <p className="font-medium text-gray-600">Registered On:</p>
            <input
              type="text"
              value={editMode ? "2023-10-15" : userData.registeredDate}
              className={`${
                editMode ? "border" : "bg-gray-100"
              } w-full p-2 rounded-md`}
              readOnly={!editMode}
            />
          </div>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Earnings Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-100 p-4 rounded-md text-center shadow-md">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <h3 className="text-2xl font-bold text-green-600">
              ₹{userData.totalEarnings}
            </h3>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md text-center shadow-md">
            <p className="text-sm text-gray-600">Coins Earned</p>
            <h3 className="text-2xl font-bold text-yellow-600">
              {userData.coinsEarned}
            </h3>
          </div>
          <div className="bg-blue-100 p-4 rounded-md text-center shadow-md">
            <p className="text-sm text-gray-600">Referral Earnings</p>
            <h3 className="text-2xl font-bold text-blue-600">
              ₹{userData.referralEarnings}
            </h3>
          </div>
        </div>
      </div>

      {/* Referral Statistics */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Referral Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-purple-100 p-4 rounded-md text-center shadow-md">
            <p className="text-sm text-gray-600">Total Referrals</p>
            <h3 className="text-2xl font-bold text-purple-600">
              {userData.totalReferrals}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
