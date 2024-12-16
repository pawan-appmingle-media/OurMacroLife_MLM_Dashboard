import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line, Pie } from "react-chartjs-2";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const NewDashboard = () => {
  // Mock data for charts
  const purchaseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Purchases",
        data: [100, 200, 150, 300, 250, 400, 350],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const levelDistributionData = {
    labels: ["Level 1", "Level 2", "Level 3", "Level 4"],
    datasets: [
      {
        data: [50, 30, 15, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  const recentActivity = [
    { name: "John Doe", action: "Purchased ₹200", date: "2024-12-15" },
    { name: "Jane Smith", action: "Referred a user", date: "2024-12-14" },
    { name: "Emily Brown", action: "Earned 20 Coins", date: "2024-12-13" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-md text-center shadow-md">
          <p className="text-sm text-gray-600">Total Users</p>
          <h3 className="text-2xl font-bold text-blue-600">120</h3>
        </div>
        <div className="bg-green-100 p-4 rounded-md text-center shadow-md">
          <p className="text-sm text-gray-600">Total Purchases</p>
          <h3 className="text-2xl font-bold text-green-600">₹12,500</h3>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md text-center shadow-md">
          <p className="text-sm text-gray-600">Coins Earned</p>
          <h3 className="text-2xl font-bold text-yellow-600">1,250</h3>
        </div>
        <div className="bg-red-100 p-4 rounded-md text-center shadow-md">
          <p className="text-sm text-gray-600">Active Referrals</p>
          <h3 className="text-2xl font-bold text-red-600">75</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Purchases Over Time</h3>
          <Line data={purchaseData} />
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">User Levels Distribution</h3>
          <Pie data={levelDistributionData} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Action</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{activity.name}</td>
                <td className="py-2">{activity.action}</td>
                <td className="py-2">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewDashboard;
