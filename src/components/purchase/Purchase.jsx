import React, { useState } from "react";
import CommonHeader from "../commonHeader/CommonHeader";

const Purchase = () => {
  const [activeTab, setActiveTab] = useState("direct");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="max-w-full p-4">
        <CommonHeader name={"Purchase"} />

        {/* Navigation Tabs */}
        <div className="flex mt-4 py-1 rounded-md shadow-sm">
          <button
            className={`px-6 py-2 font-medium text-sm rounded-md focus:outline-none transition-all duration-200 ${
              activeTab === "direct"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => handleTabChange("direct")}
          >
            Direct Purchase
          </button>

          <button
            className={`ml-4 px-6 py-2 font-medium text-sm rounded-md focus:outline-none transition-all duration-200 ${
              activeTab === "team"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => handleTabChange("team")}
          >
            Team Purchase
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          {activeTab === "direct" && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Direct Purchase
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Content for Direct Purchase goes here.
              </p>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Team Purchase
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Content for Team Purchase goes here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Purchase;
