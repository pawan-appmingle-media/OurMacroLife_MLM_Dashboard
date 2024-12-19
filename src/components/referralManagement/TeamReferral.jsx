import React from "react";
import TeamReferralInputs from "./TeamReferralInputs";

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
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Team Referral</h1>
      {/* Team Overview */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Team Referral</h2>
        <p className="text-gray-500">
          Elevate your MLM success with our Team Referral Management Program.
          Admins can define coin rewards for team referrals, encouraging
          collaboration and network expansion. Customize incentives for team
          performance and monitor progress seamlessly. Foster teamwork, amplify
          growth, and reward collective efforts with a structured and
          transparent rewards system!
        </p>
        <div className="my-2 w-1/2">
          <label
            htmlFor="referralCode"
            className="block text-sm font-medium text-purple-500 mb-2"
          >
            Enter Team Referral Coins
          </label>
          <div>
            <TeamReferralInputs levelNum={1} showButton={false} />
            <TeamReferralInputs levelNum={2} />
            <TeamReferralInputs levelNum={3} />
            <TeamReferralInputs levelNum={4} />
            <TeamReferralInputs levelNum={5} />
            <TeamReferralInputs levelNum={6} />
            <TeamReferralInputs levelNum={7} />
            <TeamReferralInputs levelNum={8} />
            <TeamReferralInputs levelNum={9} />
            <TeamReferralInputs levelNum={10} />
            <TeamReferralInputs levelNum={11} />
            <TeamReferralInputs levelNum={12} />
            <TeamReferralInputs levelNum={13} />
            <TeamReferralInputs levelNum={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamReferral;
