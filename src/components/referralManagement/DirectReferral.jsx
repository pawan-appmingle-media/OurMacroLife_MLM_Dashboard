import React from "react";

const DirectReferral = () => {
  const referrals = [
    {
      name: "John Doe",
      dateJoined: "2024-12-01",
      coins: 100,
      status: "Active",
    },
    {
      name: "Jane Smith",
      dateJoined: "2024-12-03",
      coins: 50,
      status: "Inactive",
    },
    {
      name: "Michael Lee",
      dateJoined: "2024-12-05",
      coins: 80,
      status: "Active",
    },
  ];

  const totalCoins = referrals.reduce(
    (acc, referral) => acc + referral.coins,
    0
  );
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* User Overview */}
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-lg font-bold">Referral Dashboard</h2>
          <p className="text-gray-500">
            Track your referral earnings and activity.
          </p>
          <div className="mt-4">
            <p className="text-sm">
              Total Coins Earned:{" "}
              <span className="font-bold text-green-600">
                {totalCoins} Coins
              </span>
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Share Referral Link
            </button>
          </div>
        </div>

        {/* Referral List */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Direct Referrals</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Date Joined</th>
                <th className="py-2">Coins Earned</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2">{referral.name}</td>
                  <td className="py-2">{referral.dateJoined}</td>
                  <td className="py-2 text-green-600 font-bold">
                    {referral.coins}
                  </td>
                  <td className="py-2">{referral.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DirectReferral;
