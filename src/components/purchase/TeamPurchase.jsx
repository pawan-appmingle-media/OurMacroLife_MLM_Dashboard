import React from "react";
import TeamPurchaseInput from "./TeamPurchaseInput";

const TeamPurchase = () => {
  const teamMembers = [
    { name: "John Doe", level: 1, coins: 100, status: "Active" },
    { name: "Jane Smith", level: 2, coins: 50, status: "Active" },
    { name: "Michael Lee", level: 2, coins: 80, status: "Inactive" },
    { name: "Emily Brown", level: 3, coins: 40, status: "Active" },
  ];

  const totalCoins = teamMembers.reduce((acc, member) => acc + member.coins, 0);
  const activeMembers = teamMembers.filter(
    (member) => member.status === "Active"
  ).length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Team Purchase</h1>
      {/* Team Overview */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Team Purchase</h2>
        <p className="text-gray-500">
          The MLM Purchase Management Program enables administrators to manage
          and distribute coins based on team purchases, fostering a sense of
          collaboration and incentivizing users within the MLM network. This
          feature ensures that team leaders and their downline are rewarded for
          collective purchases made by their team members.
        </p>
        <div className="my-2 w-1/2">
          <label
            htmlFor="referralCode"
            className="block text-sm font-medium text-purple-500 mb-2"
          >
            Enter Team Purchase Coins
          </label>
          <div>
            <TeamPurchaseInput levelNum={1} showButton={false} />
            <TeamPurchaseInput levelNum={2} />
            <TeamPurchaseInput levelNum={3} />
            <TeamPurchaseInput levelNum={4} />
            <TeamPurchaseInput levelNum={5} />
            <TeamPurchaseInput levelNum={6} />
            <TeamPurchaseInput levelNum={7} />
            <TeamPurchaseInput levelNum={8} />
            <TeamPurchaseInput levelNum={9} />
            <TeamPurchaseInput levelNum={10} />
            <TeamPurchaseInput levelNum={11} />
            <TeamPurchaseInput levelNum={12} />
            <TeamPurchaseInput levelNum={13} />
            <TeamPurchaseInput levelNum={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPurchase;
