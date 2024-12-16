import React from "react";

const DirectPurchase = () => {
  const purchases = [
    {
      productName: "Wireless Headphones",
      purchaseDate: "2024-12-01",
      amount: 120,
      coinsEarned: 10,
      status: "Completed",
    },
    {
      productName: "Smartphone",
      purchaseDate: "2024-12-05",
      amount: 650,
      coinsEarned: 50,
      status: "Pending",
    },
    {
      productName: "Gaming Chair",
      purchaseDate: "2024-12-08",
      amount: 300,
      coinsEarned: 30,
      status: "Completed",
    },
  ];

  const totalSpent = purchases.reduce(
    (acc, purchase) => acc + purchase.amount,
    0
  );
  const totalCoins = purchases.reduce(
    (acc, purchase) => acc + purchase.coinsEarned,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Purchase Overview */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-bold">Direct Purchase Dashboard</h2>
        <p className="text-gray-500">
          Track your direct purchases and rewards.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Total Amount Spent</p>
            <h3 className="text-2xl font-bold text-green-600">${totalSpent}</h3>
          </div>
          <div className="bg-blue-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Coins Earned</p>
            <h3 className="text-2xl font-bold text-blue-600">
              {totalCoins} Coins
            </h3>
          </div>
        </div>
      </div>

      {/* Purchase History */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-4">Purchase History</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Product Name</th>
              <th className="py-2">Purchase Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Coins Earned</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{purchase.productName}</td>
                <td className="py-2">{purchase.purchaseDate}</td>
                <td className="py-2 text-green-600 font-bold">
                  ${purchase.amount}
                </td>
                <td className="py-2">{purchase.coinsEarned} Coins</td>
                <td className="py-2">{purchase.status}</td>
                <td className="py-2">
                  <button className="mr-2 px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                    View
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectPurchase;
