import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

const TeamReferralInputs = ({ levelNum, showButton = true }) => {
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
    <>
      <div className="relative flex p-1">
        <span className="flex items-center px-4 w-[100px]">
          <span className="mr-2">Level</span> <span>{levelNum}</span>
        </span>
        <div className="relative">
          <GiTwoCoins className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-500" />
          <input
            id="referralCode"
            type="text"
            value={referralCode}
            onChange={handleReferralCodeChange}
            className="w-full px-8 py-2 border border-gray-300 rounded-md w-[305px]"
            placeholder="Enter Coins"
          />
        </div>
        {showButton && (
          <button
            type="button" // Avoid default form submission
            className="bg-purple-500 text-white rounded-md ml-2 py-1 px-4 active:border-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      {showSuccess && (
        <p className="flex text-green-700 text-xs mr-6 justify-end font-bold">
          Success
          <FaCheckCircle className="m-1" />
        </p>
      )}
    </>
  );
};

export default TeamReferralInputs;
