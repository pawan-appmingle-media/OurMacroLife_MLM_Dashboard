import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import CommonHeader from "../commonHeader/CommonHeader";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const categoriesPerPage = 5;

  const token = localStorage.getItem("token");
  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const imgBaseURL = process.env.REACT_APP_IMG_BASE_URL;

  // Fetch categories from API
  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${baseURL}/categories/getallcategory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name &&
      typeof category.name === "string" &&
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page after search
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSubCategory = (id) => {
    navigate(`/subcategory/${id}`);
  };

  return (
    <div className="p-4 w-full mx-auto bg-white rounded-lg ">
      <CommonHeader name="Category Management" />
      {/* Search Input */}
      <div className="flex justify-between">
        <div className="w-2/3 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search categories"
            className="w-full pl-10 pb-2 pt-2 border border-gray-300 rounded-lg"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Link to="/addCategory" style={{ textDecoration: "none" }}>
          <div className="p-2 cursor-pointer text-white rounded-sm bg-blue-500">
            <h3>+ Add Category</h3>
          </div>
        </Link>
      </div>

      {/* Categories Table */}
      <table className="table-auto w-full border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="p-4 border-b-2 border-gray-300 p-2 text-left">
              Category Name
            </th>
            <th className="border-b-2 border-gray-300 p-2 text-left">Image</th>
            <th className="border-b-2 border-gray-300 p-2 text-left">
              Sub Category
            </th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.length > 0 ? (
            currentCategories.map((category, index) => (
              <tr key={index}>
                <td className="border-b border-gray-200 p-2">
                  {category.name}
                </td>
                <td className="border-b border-gray-200 p-2">
                  <img
                    src={`${imgBaseURL}/${category.image}`}
                    alt={category.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border-b border-gray-200 p-2">
                  <GrView
                    className="cursor-pointer text-gray-500 hover:text-blue-500 transition duration-200"
                    onClick={() => handleSubCategory(category.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="text-center border-b border-gray-200 p-2"
              >
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryManager;
