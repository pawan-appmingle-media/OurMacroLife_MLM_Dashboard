import React, { useState } from "react";

const TeamPurchase = () => {
  const [filterLevel, setFilterLevel] = useState("All");

  const teamPurchases = [
    {
      name: "John Doe",
      level: 1,
      purchaseDate: "2024-12-01",
      amount: 120,
      coinsEarned: 10,
      status: "Completed",
    },
    {
      name: "Jane Smith",
      level: 2,
      purchaseDate: "2024-12-05",
      amount: 250,
      coinsEarned: 25,
      status: "Pending",
    },
    {
      name: "Michael Lee",
      level: 3,
      purchaseDate: "2024-12-08",
      amount: 180,
      coinsEarned: 18,
      status: "Completed",
    },
    {
      name: "Emily Brown",
      level: 2,
      purchaseDate: "2024-12-10",
      amount: 100,
      coinsEarned: 10,
      status: "Completed",
    },
  ];

  // Filtered purchases based on the selected level
  const filteredPurchases =
    filterLevel === "All"
      ? teamPurchases
      : teamPurchases.filter(
          (purchase) => purchase.level === parseInt(filterLevel)
        );

  const totalTeamSpent = filteredPurchases.reduce(
    (acc, purchase) => acc + purchase.amount,
    0
  );
  const totalTeamCoins = filteredPurchases.reduce(
    (acc, purchase) => acc + purchase.coinsEarned,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Team Purchase Overview */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-bold">Team Purchase Dashboard</h2>
        <p className="text-gray-500">
          Track purchases made by your team and the rewards earned.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Total Team Purchases</p>
            <h3 className="text-2xl font-bold text-green-600">
              ₹{totalTeamSpent}
            </h3>
          </div>
          <div className="bg-blue-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Coins Earned</p>
            <h3 className="text-2xl font-bold text-blue-600">
              {totalTeamCoins} Coins
            </h3>
          </div>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        <div className="flex items-center gap-4">
          <select
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
          </select>
        </div>
      </div>

      {/* Team Purchase History */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-4">Team Purchase History</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Level</th>
              <th className="py-2">Purchase Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Coins Earned</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPurchases.map((purchase, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{purchase.name}</td>
                <td className="py-2">Level {purchase.level}</td>
                <td className="py-2">{purchase.purchaseDate}</td>
                <td className="py-2 text-green-600 font-bold">
                  ₹{purchase.amount}
                </td>
                <td className="py-2">{purchase.coinsEarned} Coins</td>
                <td className="py-2">{purchase.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamPurchase;
