import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

const DirectReferral = () => {
  const [referralCode, setReferralCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReferralCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only digits
      setReferralCode(value);
    }
  };

  const handleSubmit = () => {
    if (referralCode.trim() !== "") {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3 * 1000); // Hide success message after 3 seconds
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Direct Referral</h1>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-md shadow-md mb-4">
        <p className="text-lg font-semibold mb-4">Direct Referral</p>
        <p className="text-md text-gray-600">
          Manage your MLM network effortlessly with our Referral Management
          Program. Admins can set custom coin rewards for direct referrals,
          ensuring transparency and motivation for your team. Tailor incentives
          to align with your goals and track referral performance in real time.
          Boost engagement and growth with a personalized rewards system!
        </p>
        <div className="my-2 w-1/3">
          <label
            htmlFor="referralCode"
            className="block text-sm font-medium text-purple-500 mb-2"
          >
            Enter Direct Referral Coins
          </label>
          <div className="relative flex p-1">
            <input
              id="referralCode"
              type="text"
              value={referralCode}
              onChange={handleReferralCodeChange}
              className="w-full px-8 border border-gray-300 rounded-md"
              placeholder="Enter Coins"
            />
            <GiTwoCoins className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <button
              type="button" // Change to "button" to avoid form submission
              className="bg-purple-500 text-white rounded-sm ml-2 py-2 px-4 active:border-none"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {showSuccess && (
            <p className="flex text-green-700 text-xs mr-6 justify-end font-bold">
              Success
              <FaCheckCircle className="m-1" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectReferral;
