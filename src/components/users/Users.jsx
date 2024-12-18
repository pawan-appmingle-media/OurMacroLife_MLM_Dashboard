import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CommonHeader from "../commonHeader/CommonHeader";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      level: 1,
      totalPurchases: 350,
      coinsEarned: 35,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+0987654321",
      level: 2,
      totalPurchases: 200,
      coinsEarned: 20,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      phone: "+1122334455",
      level: 3,
      totalPurchases: 500,
      coinsEarned: 50,
      status: "Active",
    },
  ];

  // Filter users based on status and search query
  const filteredUsers = users.filter(
    (user) =>
      (filterStatus === "All" || user.status === filterStatus) &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = totalUsers - activeUsers;

  return (
    <>
      <div className="p-4">
        <CommonHeader name="Users" />
        <div className="p-6 bg-gray-100 min-h-screen">
          {/* User Overview */}
          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h2 className="text-lg font-bold">Users Dashboard</h2>
            <p className="text-gray-500">
              Manage users and track their details.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Total Users</p>
                <h3 className="text-2xl font-bold text-blue-600">
                  {totalUsers}
                </h3>
              </div>
              <div className="bg-green-100 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Active Users</p>
                <h3 className="text-2xl font-bold text-green-600">
                  {activeUsers}
                </h3>
              </div>
              <div className="bg-red-100 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Inactive Users</p>
                <h3 className="text-2xl font-bold text-red-600">
                  {inactiveUsers}
                </h3>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search by name or email"
                  className="px-6 py-2 pl-10 border border-red-500 border-4 rounded-md w-full focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute top-3 left-3 text-gray-500" />
              </div>
              <select
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-4">Users List</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Phone</th>
                  <th className="py-2">Level</th>
                  <th className="py-2">Total Purchases</th>
                  <th className="py-2">Coins Earned</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">{user.phone}</td>
                    <td className="py-2">Level {user.level}</td>
                    <td className="py-2">₹{user.totalPurchases}</td>
                    <td className="py-2">{user.coinsEarned} Coins</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded-md text-sm ₹{
                          user.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-2">
                      <button className="mr-2 px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                        View
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                        Deactivate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
