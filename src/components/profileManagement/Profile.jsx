import axios from "axios";
import React, { useEffect, useState } from "react";
import imagee from "../../images/profiledummy.png";
import CommonHeader from "../commonHeader/CommonHeader";

const ProfileUpload = () => {
  const [vendor, setVendor] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(null);
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const toggleModal = () => setShowModal(!showModal);

  const fetchVendor = async () => {
    if (!token || !userId) {
      console.error("Token or User ID is missing.");
      return;
    }
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/vendor/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVendor(response.data.Vendor_Profile);
    } catch (error) {
      console.error("Error during fetch Vendor Api", error);
    }
  };

  const handleLogoChange = (e) => setLogo(e.target.files[0]);

  const handleLogoSubmit = async (e) => {
    e.preventDefault();
    if (!logo) return;

    const formData = new FormData();
    formData.append("logo", logo);

    try {
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/vendor/update-logo/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchVendor();
    } catch (error) {
      console.error("Error during logo update", error);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const updatedProfileData = {
      first_name: e.target.first_name.value || vendor.first_name,
      last_name: e.target.last_name.value || vendor.last_name,
      phone_number: e.target.phone_number.value || vendor.phone_number,
      email: e.target.email.value || vendor.email,
      gstin: e.target.gstin.value || vendor.gstin,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/vendor/update/${userId}`,
        updatedProfileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchVendor();
    } catch (error) {
      console.error("Error during profile update", error);
    }
  };

  useEffect(() => {
    fetchVendor();
  }, [userId]);

  return (
    <div className="max-w-full mx-auto p-4">
      <CommonHeader name="Profile" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-6 items-start">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md border w-full lg:w-1/4 mt-6 p-4 flex flex-col items-center">
          <img
            src={imagee}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center mb-2">
            {vendor.first_name} {vendor.last_name}
          </h2>
          <p className="text-gray-600 text-sm text-center">Category Name</p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Change Logo
          </button>
        </div>

        {/* Modal for Logo Change */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-72">
              <h2 className="mb-4 text-lg font-semibold">Change Logo</h2>
              <form onSubmit={handleLogoSubmit} className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="block w-full border rounded p-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                >
                  Change Logo
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Update Profile Form */}
        <div className="bg-white shadow-md border rounded-lg p-5 w-full lg:w-2/3 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Update Profile
          </h2>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="First Name"
                  defaultValue={vendor.first_name}
                  name="first_name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  maxLength={15}
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="Last Name"
                  defaultValue={vendor.last_name}
                  name="last_name"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="Mobile Number"
                  defaultValue={vendor.phone_number}
                  name="phone_number"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="Enter Email"
                  defaultValue={vendor.email}
                  name="email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">GST No</label>
              <input
                type="text"
                className="border border-gray-300 w-full p-2 rounded"
                placeholder="GST No"
                defaultValue={vendor.gstin}
                name="gstin"
              />
            </div>
            <div>
              <label className="block text-gray-700">Profile Image</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setImage(e.target.files[0])}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-16 py-2 rounded hover:bg-green-600">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpload;
