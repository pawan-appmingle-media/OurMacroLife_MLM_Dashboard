import React from "react";

const TeamReferral = () => {
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
      {/* Team Overview */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-bold">Team Referral Dashboard</h2>
        <p className="text-gray-500">
          Monitor your team referrals and their contributions.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Total Coins Earned</p>
            <h3 className="text-2xl font-bold text-green-600">
              {totalCoins} Coins
            </h3>
          </div>
          <div className="bg-blue-100 p-4 rounded-md text-center">
            <p className="text-sm text-gray-600">Active Members</p>
            <h3 className="text-2xl font-bold text-blue-600">
              {activeMembers}
            </h3>
          </div>
        </div>
      </div>

      {/* Team Members List */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4">Team Members</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Level</th>
              <th className="py-2">Coins Earned</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{member.name}</td>
                <td className="py-2">Level {member.level}</td>
                <td className="py-2 text-green-600 font-bold">
                  {member.coins}
                </td>
                <td className="py-2">{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Referral Hierarchy */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-4">Referral Hierarchy</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-gray-500">Level 1</p>
          <ul className="ml-4 list-disc text-gray-700">
            <li>John Doe</li>
          </ul>
          <p className="mt-4 text-gray-500">Level 2</p>
          <ul className="ml-4 list-disc text-gray-700">
            <li>Jane Smith</li>
            <li>Michael Lee</li>
          </ul>
          <p className="mt-4 text-gray-500">Level 3</p>
          <ul className="ml-4 list-disc text-gray-700">
            <li>Emily Brown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamReferral;
