import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CommonHeader from "../commonHeader/CommonHeader";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}/product/getpbyvendor/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response", response);
      setProducts(response.data.products.reverse());
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  }, [baseURL, userId, token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEdit = (productId) => {
    navigate(`/editProduct/${productId}`);
  };

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the product?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`${baseURL}/product/delete/${userId}/${productId}`, {
          headers: { Authorization: ` Bearer ${token} ` },
        });
        alert("Product deleted successfully!");
        fetchProducts(); // Refresh the product list without reloading the page
      } catch (error) {
        console.error("Error while trying to delete:", error);
        alert("An error occurred while deleting the product.");
      }
    } else {
      alert("Product deletion canceled.");
    }
  };

  const handleView = (productId) => {
    navigate(`/viewProduct/${productId}`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => (
    <div className="flex justify-center justify-between items-center mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2 disabled:opacity-50"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );

  useEffect(() => {
    fetchProducts();
  }, [userId]);

  return (
    <>
      <div className="container mx-auto p-4">
        <CommonHeader name={"Our Products"} />

        {/* Search Input */}
        <div className="flex justify-between mb-2">
          <div className="w-2/3 relative">
            {/* Make the container relative */}
            <input
              type="text"
              value={searchTerm}
              placeholder="Search categories"
              className="w-full pl-10 pb-2 pt-2 border border-gray-300 rounded-lg" // Add left padding for icon
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
            {/* Position the icon */}
          </div>
          <Link to="/addCategory">
            <div className="p-2 cursor-pointer text-white rounded-sm bg-blue-500">
              <h3>+ Add Product</h3>
            </div>
          </Link>
        </div>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="pt-4 pb-4 pl-2 border-b">Product Id</th>
              <th className="border-b">Product Title</th>
              <th className="border-b">Image</th>
              {/* <th className="border-b">Category</th> */}
              <th className="border-b">Visibility Status</th>
              <th className="border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length >= 0 ? (
              currentProducts.map((product) => (
                <tr key={product.id}>
                  <td className="p-4 text-blue-500 font-semibold border-b">
                    {product.id}
                  </td>
                  <td className="border-b">{product.name}</td>
                  <td className="border-b">
                    <img
                      src={`https://uvfolderking.com/suresop/storage/app/public/${product.featured_image}`}
                      className="h-10 w-10 object-cover"
                      alt=""
                    />
                  </td>
                  {/* <td className="border-b">{product.category}</td> */}
                  <td className="border-b">{product.status}</td>
                  <td className="border-b">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleView(product.id)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 border-b">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {filteredProducts.length > productsPerPage && renderPagination()}
      </div>
    </>
  );
};

export default ProductList;
