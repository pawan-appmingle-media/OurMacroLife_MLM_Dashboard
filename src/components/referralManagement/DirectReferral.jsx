import React, { useState } from "react";

const DirectReferral = () => {
  const [referralCode, setReferralCode] = useState("");
  const [coins, setCoins] = useState("");
  const [status, setStatus] = useState("");

  const handleReferralCodeChange = (e) => {
    setReferralCode(e.target.value);
  };

  const handleCoinsChange = (e) => {
    setCoins(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Direct Referral</h1>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <p className="text-lg font-semibold mb-4">About Coins</p>
        <p className="text-sm text-gray-600">
          Coins are earned through successful referrals in the MLM system. The
          more users you refer, the more coins you can accumulate.
        </p>
      </div>

      {/* Referral Form */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Referral Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="referralCode"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Referral Code
            </label>
            <input
              id="referralCode"
              type="text"
              value={referralCode}
              onChange={handleReferralCodeChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter referral code"
            />
          </div>
          <div>
            <label
              htmlFor="coins"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Coins Earned
            </label>
            <input
              id="coins"
              type="number"
              value={coins}
              onChange={handleCoinsChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter coins earned"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Referral Status
          </label>
          <input
            id="status"
            type="text"
            value={status}
            onChange={handleStatusChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter referral status"
          />
        </div>
      </div>

      {/* Referral Data Listing */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Referral Data</h3>
        <table className="min-w-full table-auto">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 text-left">Referral Code</th>
              <th className="px-4 py-2 text-left">Coins Earned</th>
              <th className="px-4 py-2 text-left">Referral Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add example referral data rows here */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">REF123</td>
              <td className="px-4 py-2">50</td>
              <td className="px-4 py-2">Active</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">REF124</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectReferral;
