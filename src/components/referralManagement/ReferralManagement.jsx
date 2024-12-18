import React, { useState } from "react";
import CommonHeader from "../commonHeader/CommonHeader";
import DirectReferral from "./DirectReferral";
import TeamReferral from "./TeamReferral";

const ReferralManagement = () => {
  const [activeTab, setActiveTab] = useState("direct");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="max-w-full p-4">
        <CommonHeader name={"Referral"} />

        {/* Navigation Tabs */}
        <div className="flex mt-4 p-1 rounded-md shadow-sm inline-block">
          <button
            className={`px-6 py-2 font-medium text-sm rounded-md focus:outline-none transition-all duration-200 ${
              activeTab === "direct"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => handleTabChange("direct")}
          >
            Direct Referral
          </button>

          <button
            className={`ml-4 px-6 py-2 font-medium text-sm rounded-md focus:outline-none transition-all duration-200 ${
              activeTab === "team"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => handleTabChange("team")}
          >
            Team Referral
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          {activeTab === "direct" && <DirectReferral />}

          {activeTab === "team" && <TeamReferral />}
        </div>
      </div>
    </>
  );
};

export default ReferralManagement;
