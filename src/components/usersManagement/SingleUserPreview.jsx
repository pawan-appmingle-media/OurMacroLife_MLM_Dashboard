import React from "react";

const SingleUserPreview = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex z-[1200] items-center justify-center absolute top-0 left-0 w-[100vw]">
        <div className="bg-white p-6 rounded-md shadow-md w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">User Details</h2>
            <button
              className="text-red-500 text-lg font-semibold"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-bold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-bold">Level:</span> {user.level}
            </p>
            <p>
              <span className="font-bold">Total Purchases:</span> ₹
              {user.totalPurchases}
            </p>
            <p>
              <span className="font-bold">Coins Earned:</span>{" "}
              {user.coinsEarned} Coins
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUserPreview;
